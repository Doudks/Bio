(function () {
  "use strict";

  const SUPABASE_URL = "https://gjocrztgszveuniyffye.supabase.co";
  const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_I00i2L2P3ihFYycGHkFeew_chtBVzPW";
  const PAGE_KEY = "home";
  const PAGE_SIZE = 20;

  const state = {
    client: null,
    session: null,
    profile: null,
    comments: [],
    page: 0,
    totalComments: 0,
    authRefreshToken: 0,
    passwordRecoveryMode: false
  };

  const elements = {};

  function collectElements() {
    Object.assign(elements, {
      loginTab: document.getElementById("community-login-tab"),
      signupTab: document.getElementById("community-signup-tab"),
      loggedOut: document.getElementById("community-auth-logged-out"),
      loggedIn: document.getElementById("community-auth-logged-in"),
      loginForm: document.getElementById("community-login-form"),
      signupForm: document.getElementById("community-signup-form"),
      loginEmail: document.getElementById("community-login-email"),
      loginPassword: document.getElementById("community-login-password"),
      signupUsername: document.getElementById("community-signup-username"),
      signupEmail: document.getElementById("community-signup-email"),
      signupPassword: document.getElementById("community-signup-password"),
      forgotPasswordButton: document.getElementById("community-forgot-password-btn"),
      passwordRequestForm: document.getElementById("community-password-request-form"),
      passwordRequestEmail: document.getElementById("community-password-request-email"),
      passwordRequestBack: document.getElementById("community-password-request-back"),
      passwordResetForm: document.getElementById("community-password-reset-form"),
      passwordResetNew: document.getElementById("community-password-reset-new"),
      passwordResetConfirm: document.getElementById("community-password-reset-confirm"),
      signoutButton: document.getElementById("community-signout-btn"),
      authMessage: document.getElementById("community-auth-message"),
      username: document.getElementById("community-username"),
      userAvatar: document.getElementById("community-user-avatar"),
      viewCount: document.getElementById("site-view-count"),
      commentCount: document.getElementById("community-comment-count"),
      loginNotice: document.getElementById("community-login-notice"),
      commentForm: document.getElementById("community-comment-form"),
      commentBody: document.getElementById("community-comment-body"),
      commentLength: document.getElementById("community-comment-length"),
      commentsStatus: document.getElementById("community-comments-status"),
      commentsList: document.getElementById("community-comments-list"),
      loadMore: document.getElementById("community-load-more")
    });
  }

  function setAuthMessage(message, type) {
    elements.authMessage.textContent = message || "";
    elements.authMessage.classList.toggle("is-error", type === "error");
    elements.authMessage.classList.toggle("is-success", type === "success");
  }

  function setCommentsStatus(message, isError) {
    elements.commentsStatus.textContent = message || "";
    elements.commentsStatus.style.color = isError ? "#ff91a8" : "";
    elements.commentsStatus.hidden = !message;
  }

  function setButtonBusy(button, busy, busyText) {
    if (!button) return;
    if (!button.dataset.label) button.dataset.label = button.textContent;
    button.disabled = busy;
    button.textContent = busy ? busyText : button.dataset.label;
  }

  function showAuthView(view) {
    const showingLogin = view === "login";
    const showingSignup = view === "signup";
    const showingRequest = view === "request-reset";
    const showingReset = view === "reset-password";

    elements.loginForm.hidden = !showingLogin;
    elements.signupForm.hidden = !showingSignup;
    elements.passwordRequestForm.hidden = !showingRequest;
    elements.passwordResetForm.hidden = !showingReset;

    elements.loginTab.parentElement.hidden = showingRequest || showingReset;
    elements.loginTab.classList.toggle("is-active", showingLogin);
    elements.signupTab.classList.toggle("is-active", showingSignup);
    elements.loginTab.setAttribute("aria-selected", String(showingLogin));
    elements.signupTab.setAttribute("aria-selected", String(showingSignup));
    setAuthMessage("");
  }

  function switchAuthTab(tab) {
    state.passwordRecoveryMode = false;
    showAuthView(tab);
  }

  function getRedirectUrl() {
    const url = new URL(window.location.href);
    url.hash = "";
    url.search = "";
    return url.href;
  }

  function createVisitorId() {
    if (window.crypto && typeof window.crypto.randomUUID === "function") {
      return window.crypto.randomUUID();
    }

    if (!window.crypto || typeof window.crypto.getRandomValues !== "function") {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (character) => {
        const random = Math.floor(Math.random() * 16);
        const value = character === "x" ? random : (random & 3) | 8;
        return value.toString(16);
      });
    }

    const bytes = new Uint8Array(16);
    window.crypto.getRandomValues(bytes);
    bytes[6] = (bytes[6] & 15) | 64;
    bytes[8] = (bytes[8] & 63) | 128;
    const hex = Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0"));
    return `${hex.slice(0, 4).join("")}-${hex.slice(4, 6).join("")}-${hex.slice(6, 8).join("")}-${hex.slice(8, 10).join("")}-${hex.slice(10).join("")}`;
  }

  function getVisitorId() {
    const storageKey = "moonlit-archive-visitor-id";

    try {
      let visitorId = localStorage.getItem(storageKey);
      if (!visitorId) {
        visitorId = createVisitorId();
        localStorage.setItem(storageKey, visitorId);
      }
      return visitorId;
    } catch (_error) {
      return createVisitorId();
    }
  }

  async function registerView() {
    try {
      const { data, error } = await state.client.rpc("register_page_view", {
        p_page_key: PAGE_KEY,
        p_visitor_id: getVisitorId()
      });

      if (error) throw error;
      elements.viewCount.textContent = new Intl.NumberFormat("en-US").format(Number(data) || 0);
    } catch (error) {
      console.error("Moonlit view counter:", error);
      elements.viewCount.textContent = "—";
    }
  }

  function friendlyAuthError(error) {
    const message = String(error?.message || "Something went wrong.");
    const lower = message.toLowerCase();

    if (lower.includes("invalid login credentials")) return "Email or password is incorrect.";
    if (lower.includes("email not confirmed")) return "Confirm your email before signing in.";
    if (lower.includes("user already registered")) return "This email already has an account.";
    if (lower.includes("password")) return message;
    return message;
  }

  async function loadProfile(user) {
    if (!user) return null;

    const { data, error } = await state.client
      .from("profiles")
      .select("id, username, avatar_url, role")
      .eq("id", user.id)
      .single();

    if (error) {
      console.error("Moonlit profile:", error);
      return {
        id: user.id,
        username: user.user_metadata?.username || user.email?.split("@")[0] || "moon_guest",
        avatar_url: null,
        role: "user"
      };
    }

    return data;
  }

  function safeImageUrl(value) {
    if (!value) return null;
    try {
      const url = new URL(value);
      return url.protocol === "https:" ? url.href : null;
    } catch (_error) {
      return null;
    }
  }

  function renderAvatar(container, profile) {
    container.replaceChildren();
    const imageUrl = safeImageUrl(profile?.avatar_url);

    if (imageUrl) {
      const image = document.createElement("img");
      image.src = imageUrl;
      image.alt = "";
      image.loading = "lazy";
      image.referrerPolicy = "no-referrer";
      image.addEventListener("error", () => {
        container.replaceChildren(document.createTextNode((profile?.username || "M").charAt(0).toUpperCase()));
      }, { once: true });
      container.appendChild(image);
      return;
    }

    container.textContent = (profile?.username || "M").charAt(0).toUpperCase();
  }

  async function refreshAuth(session) {
    const token = ++state.authRefreshToken;
    state.session = session;
    state.profile = session?.user ? await loadProfile(session.user) : null;
    if (token !== state.authRefreshToken) return;

    const signedIn = Boolean(session?.user);

    if (state.passwordRecoveryMode) {
      elements.loggedOut.hidden = false;
      elements.loggedIn.hidden = true;
      elements.commentForm.hidden = true;
      elements.loginNotice.hidden = false;
      showAuthView("reset-password");
      return;
    }

    elements.loggedOut.hidden = signedIn;
    elements.loggedIn.hidden = !signedIn;
    elements.commentForm.hidden = !signedIn;
    elements.loginNotice.hidden = signedIn;

    if (signedIn) {
      elements.username.textContent = `@${state.profile.username}`;
      renderAvatar(elements.userAvatar, state.profile);
      setAuthMessage("");
    } else {
      elements.commentBody.value = "";
      elements.commentLength.textContent = "0 / 1000";
    }

    renderComments();
  }

  function getCommentProfile(comment) {
    if (Array.isArray(comment.profiles)) return comment.profiles[0] || null;
    return comment.profiles || null;
  }

  function formatCommentDate(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "unknown time";

    return new Intl.DateTimeFormat("en", {
      month: "short",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }).format(date);
  }

  function canManageComment(comment) {
    if (!state.session?.user) return false;
    return state.session.user.id === comment.user_id || state.profile?.role === "admin";
  }

  function createActionButton(label, action, commentId, danger) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.dataset.action = action;
    button.dataset.commentId = String(commentId);
    if (danger) button.classList.add("is-danger");
    return button;
  }

  function createCommentElement(comment) {
    const profile = getCommentProfile(comment) || { username: "moon_guest", avatar_url: null, role: "user" };
    const article = document.createElement("article");
    article.className = "community-comment";
    article.dataset.commentId = String(comment.id);

    const avatar = document.createElement("div");
    avatar.className = "community-comment-avatar";
    avatar.setAttribute("aria-hidden", "true");
    renderAvatar(avatar, profile);

    const main = document.createElement("div");
    main.className = "community-comment-main";

    const head = document.createElement("div");
    head.className = "community-comment-head";

    const username = document.createElement("strong");
    username.textContent = `@${profile.username || "moon_guest"}`;
    head.appendChild(username);

    if (profile.role === "admin") {
      const badge = document.createElement("span");
      badge.className = "community-admin-badge";
      badge.textContent = "admin";
      head.appendChild(badge);
    }

    const time = document.createElement("time");
    time.dateTime = comment.created_at;
    time.textContent = formatCommentDate(comment.created_at);
    head.appendChild(time);

    const body = document.createElement("p");
    body.className = "community-comment-body";
    body.textContent = comment.body;

    main.append(head, body);

    if (canManageComment(comment)) {
      const actions = document.createElement("div");
      actions.className = "community-comment-actions";
      actions.append(
        createActionButton("edit", "edit", comment.id, false),
        createActionButton("delete", "delete", comment.id, true)
      );
      main.appendChild(actions);
    }

    article.append(avatar, main);
    return article;
  }

  function renderComments() {
    elements.commentsList.replaceChildren();

    if (!state.comments.length) {
      setCommentsStatus("No transmissions yet. Be the first one.", false);
    } else {
      setCommentsStatus("", false);
      const fragment = document.createDocumentFragment();
      state.comments.forEach((comment) => fragment.appendChild(createCommentElement(comment)));
      elements.commentsList.appendChild(fragment);
    }

    const label = state.totalComments === 1 ? "1 comment" : `${state.totalComments} comments`;
    elements.commentCount.textContent = label;
    elements.loadMore.hidden = state.comments.length >= state.totalComments;
  }

  async function loadComments(options) {
    const append = Boolean(options?.append);
    const nextPage = append ? state.page + 1 : 0;
    const from = nextPage * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    setCommentsStatus(append ? "Loading older transmissions…" : "Loading the archive…", false);
    setButtonBusy(elements.loadMore, true, "loading…");

    try {
      const { data, error, count } = await state.client
        .from("comments")
        .select("id, user_id, body, created_at, updated_at, profiles(username, avatar_url, role)", { count: "exact" })
        .eq("page_key", PAGE_KEY)
        .order("created_at", { ascending: false })
        .range(from, to);

      if (error) throw error;

      state.page = nextPage;
      state.totalComments = count || 0;
      state.comments = append ? state.comments.concat(data || []) : (data || []);
      renderComments();
    } catch (error) {
      console.error("Moonlit comments:", error);
      setCommentsStatus("The guestbook could not be loaded right now.", true);
    } finally {
      setButtonBusy(elements.loadMore, false, "loading…");
    }
  }

  async function handleLogin(event) {
    event.preventDefault();
    const submit = elements.loginForm.querySelector("button[type='submit']");
    setButtonBusy(submit, true, "entering…");
    setAuthMessage("");

    try {
      const { error } = await state.client.auth.signInWithPassword({
        email: elements.loginEmail.value.trim(),
        password: elements.loginPassword.value
      });

      if (error) throw error;
      elements.loginForm.reset();
      setAuthMessage("Welcome back.", "success");
    } catch (error) {
      setAuthMessage(friendlyAuthError(error), "error");
    } finally {
      setButtonBusy(submit, false, "entering…");
    }
  }

  async function handleSignup(event) {
    event.preventDefault();
    const username = elements.signupUsername.value.trim();
    const submit = elements.signupForm.querySelector("button[type='submit']");

    if (!/^[A-Za-z0-9_]{3,24}$/.test(username)) {
      setAuthMessage("Username must have 3–24 letters, numbers or underscores.", "error");
      return;
    }

    setButtonBusy(submit, true, "creating…");
    setAuthMessage("");

    try {
      const { data, error } = await state.client.auth.signUp({
        email: elements.signupEmail.value.trim(),
        password: elements.signupPassword.value,
        options: {
          data: { username },
          emailRedirectTo: getRedirectUrl()
        }
      });

      if (error) throw error;
      elements.signupForm.reset();

      if (data.session) {
        setAuthMessage("Account created. Welcome to the archive.", "success");
      } else {
        setAuthMessage("Check your email and confirm the account, then sign in.", "success");
      }
    } catch (error) {
      setAuthMessage(friendlyAuthError(error), "error");
    } finally {
      setButtonBusy(submit, false, "creating…");
    }
  }

  async function handlePasswordResetRequest(event) {
    event.preventDefault();
    const email = elements.passwordRequestEmail.value.trim();
    const submit = elements.passwordRequestForm.querySelector("button[type='submit']");
    if (!email) return;

    setButtonBusy(submit, true, "sending…");
    setAuthMessage("");

    try {
      const redirectTo = getRedirectUrl();
      const { error } = await state.client.auth.resetPasswordForEmail(email, { redirectTo });
      if (error) throw error;
      elements.passwordRequestForm.reset();
      setAuthMessage("If an account exists for that email, a reset link has been sent.", "success");
    } catch (error) {
      setAuthMessage(friendlyAuthError(error), "error");
    } finally {
      setButtonBusy(submit, false, "sending…");
    }
  }

  async function handlePasswordUpdate(event) {
    event.preventDefault();
    const password = elements.passwordResetNew.value;
    const confirmPassword = elements.passwordResetConfirm.value;
    const submit = elements.passwordResetForm.querySelector("button[type='submit']");

    if (password.length < 6) {
      setAuthMessage("Password must have at least 6 characters.", "error");
      return;
    }

    if (password !== confirmPassword) {
      setAuthMessage("The passwords do not match.", "error");
      return;
    }

    setButtonBusy(submit, true, "updating…");
    setAuthMessage("");

    try {
      const { error } = await state.client.auth.updateUser({ password });
      if (error) throw error;
      state.passwordRecoveryMode = false;
      elements.passwordResetForm.reset();
      history.replaceState({}, document.title, getRedirectUrl());
      setAuthMessage("Password updated. You're back in the archive.", "success");
      const { data } = await state.client.auth.getSession();
      await refreshAuth(data.session);
    } catch (error) {
      setAuthMessage(friendlyAuthError(error), "error");
    } finally {
      setButtonBusy(submit, false, "updating…");
    }
  }

  async function handleSignout() {
    setButtonBusy(elements.signoutButton, true, "leaving…");
    const { error } = await state.client.auth.signOut();
    setButtonBusy(elements.signoutButton, false, "leaving…");
    if (error) setAuthMessage(friendlyAuthError(error), "error");
  }

  async function handleCommentSubmit(event) {
    event.preventDefault();
    if (!state.session?.user) {
      setAuthMessage("Sign in before commenting.", "error");
      return;
    }

    const body = elements.commentBody.value.trim();
    if (!body) return;

    const submit = elements.commentForm.querySelector("button[type='submit']");
    setButtonBusy(submit, true, "sending…");
    setCommentsStatus("", false);

    try {
      const { error } = await state.client.from("comments").insert({
        page_key: PAGE_KEY,
        body
      });

      if (error) throw error;
      elements.commentBody.value = "";
      elements.commentLength.textContent = "0 / 1000";
      await loadComments({ append: false });
    } catch (error) {
      console.error("Moonlit comment insert:", error);
      const message = String(error?.message || "");
      setCommentsStatus(
        message.includes("15 segundos") ? "Wait 15 seconds before commenting again." : "Your message could not be sent.",
        true
      );
    } finally {
      setButtonBusy(submit, false, "sending…");
    }
  }

  function beginCommentEdit(comment, article) {
    const main = article.querySelector(".community-comment-main");
    const body = main.querySelector(".community-comment-body");
    const oldActions = main.querySelector(".community-comment-actions");
    if (!body || main.querySelector(".community-edit-textarea")) return;

    body.hidden = true;
    if (oldActions) oldActions.hidden = true;

    const textarea = document.createElement("textarea");
    textarea.className = "community-edit-textarea";
    textarea.maxLength = 1000;
    textarea.value = comment.body;

    const actions = document.createElement("div");
    actions.className = "community-edit-actions";
    actions.append(
      createActionButton("save", "save-edit", comment.id, false),
      createActionButton("cancel", "cancel-edit", comment.id, false)
    );

    main.append(textarea, actions);
    textarea.focus();
    textarea.setSelectionRange(textarea.value.length, textarea.value.length);
  }

  function cancelCommentEdit(article) {
    article.querySelector(".community-edit-textarea")?.remove();
    article.querySelector(".community-edit-actions")?.remove();
    const body = article.querySelector(".community-comment-body");
    const actions = article.querySelector(".community-comment-actions");
    if (body) body.hidden = false;
    if (actions) actions.hidden = false;
  }

  async function saveCommentEdit(comment, article, button) {
    const textarea = article.querySelector(".community-edit-textarea");
    const body = textarea?.value.trim();
    if (!body) return;

    setButtonBusy(button, true, "saving…");
    const { error } = await state.client.from("comments").update({ body }).eq("id", comment.id);

    if (error) {
      console.error("Moonlit comment update:", error);
      setCommentsStatus("The edit could not be saved.", true);
      setButtonBusy(button, false, "saving…");
      return;
    }

    await loadComments({ append: false });
  }

  async function deleteComment(comment, button) {
    if (!window.confirm("Delete this comment from the archive?")) return;
    setButtonBusy(button, true, "deleting…");

    const { error } = await state.client.from("comments").delete().eq("id", comment.id);
    if (error) {
      console.error("Moonlit comment delete:", error);
      setCommentsStatus("The comment could not be deleted.", true);
      setButtonBusy(button, false, "deleting…");
      return;
    }

    await loadComments({ append: false });
  }

  function handleCommentAction(event) {
    const button = event.target.closest("button[data-action]");
    if (!button) return;

    const comment = state.comments.find((item) => String(item.id) === button.dataset.commentId);
    const article = button.closest(".community-comment");
    if (!comment || !article) return;

    if (button.dataset.action === "edit") beginCommentEdit(comment, article);
    if (button.dataset.action === "cancel-edit") cancelCommentEdit(article);
    if (button.dataset.action === "save-edit") saveCommentEdit(comment, article, button);
    if (button.dataset.action === "delete") deleteComment(comment, button);
  }

  function bindEvents() {
    elements.loginTab.addEventListener("click", () => switchAuthTab("login"));
    elements.signupTab.addEventListener("click", () => switchAuthTab("signup"));
    elements.loginForm.addEventListener("submit", handleLogin);
    elements.signupForm.addEventListener("submit", handleSignup);
    elements.forgotPasswordButton.addEventListener("click", () => {
      const currentEmail = elements.loginEmail.value.trim();
      if (currentEmail) elements.passwordRequestEmail.value = currentEmail;
      showAuthView("request-reset");
    });
    elements.passwordRequestBack.addEventListener("click", () => showAuthView("login"));
    elements.passwordRequestForm.addEventListener("submit", handlePasswordResetRequest);
    elements.passwordResetForm.addEventListener("submit", handlePasswordUpdate);
    elements.signoutButton.addEventListener("click", handleSignout);
    elements.commentForm.addEventListener("submit", handleCommentSubmit);
    elements.commentsList.addEventListener("click", handleCommentAction);
    elements.loadMore.addEventListener("click", () => loadComments({ append: true }));
    elements.commentBody.addEventListener("input", () => {
      elements.commentLength.textContent = `${elements.commentBody.value.length} / 1000`;
    });
  }

  async function init() {
    collectElements();
    if (!elements.commentsList) return;

    if (!window.supabase?.createClient) {
      setCommentsStatus("The archive connection could not be loaded.", true);
      return;
    }

    state.client = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    });

    bindEvents();
    switchAuthTab("login");

    state.client.auth.onAuthStateChange((event, session) => {
      window.setTimeout(async () => {
        if (event === "PASSWORD_RECOVERY") {
          state.passwordRecoveryMode = true;
          state.session = session;
          elements.loggedOut.hidden = false;
          elements.loggedIn.hidden = true;
          showAuthView("reset-password");
          setAuthMessage("Recovery link accepted. Choose a new password.", "success");
          return;
        }

        await refreshAuth(session);
      }, 0);
    });

    const { data } = await state.client.auth.getSession();
    await refreshAuth(data.session);

    await Promise.all([
      registerView(),
      loadComments({ append: false })
    ]);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
