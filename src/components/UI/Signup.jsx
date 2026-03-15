/* eslint-disable react/prop-types */
import { forwardRef, useId, useState, useEffect, useRef } from "react";

// ─── Google Icon ──────────────────────────────────────────────────────────────
const GoogleIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s12-5.373 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-2.641-.21-5.236-.611-7.743z" />
            <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
            <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
            <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.022 35.026 44 30.038 44 24c0-2.641-.21-5.236-.611-7.743z" />
      </svg>
);

// ─── Input ────────────────────────────────────────────────────────────────────
const Input = forwardRef(({ label, type = "text", placeholder = "Enter something", star = false, className = "", ...attributes }, ref) => {
      const id = useId();
      return (
            <div>
                  {label && (
                        <label htmlFor={id} className="text-sm font-medium block mb-1" style={{ color: "#a1a1aa" }}>
                              {label} {star && <span className="text-red-400">*</span>}
                        </label>
                  )}
                  <div className="rounded-2xl border transition-colors focus-within:border-violet-500" style={{ backgroundColor: "#161616", borderColor: "#262626" }}>
                        <input ref={ref} id={id} className={`w-full bg-transparent text-sm p-4 rounded-2xl focus:outline-none ${className}`} style={{ color: "#fafafa" }} type={type} placeholder={placeholder} {...attributes} />
                  </div>
            </div>
      );
});
Input.displayName = "Input";

// ─── Pupil ────────────────────────────────────────────────────────────────────
function Pupil({ size = 12, maxDistance = 5, pupilColor = "#0a0a0a", forceLookX, forceLookY }) {
      const [mouse, setMouse] = useState({ x: 0, y: 0 });
      const ref = useRef(null);

      useEffect(() => {
            const h = (e) => setMouse({ x: e.clientX, y: e.clientY });
            window.addEventListener("mousemove", h);
            return () => window.removeEventListener("mousemove", h);
      }, []);

      const getPos = () => {
            if (!ref.current) return { x: 0, y: 0 };
            if (forceLookX !== undefined && forceLookY !== undefined) return { x: forceLookX, y: forceLookY };
            const rect = ref.current.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = mouse.x - cx;
            const dy = mouse.y - cy;
            const dist = Math.min(Math.sqrt(dx ** 2 + dy ** 2), maxDistance);
            const angle = Math.atan2(dy, dx);
            return { x: Math.cos(angle) * dist, y: Math.sin(angle) * dist };
      };

      const pos = getPos();
      return (
            <div
                  ref={ref}
                  style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        backgroundColor: pupilColor,
                        borderRadius: "50%",
                        transform: `translate(${pos.x}px, ${pos.y}px)`,
                        transition: "transform 0.1s ease-out",
                  }}
            />
      );
}

// ─── EyeBall ──────────────────────────────────────────────────────────────────
function EyeBall({ size = 48, pupilSize = 16, maxDistance = 10, eyeColor = "white", pupilColor = "#0a0a0a", isBlinking = false, forceLookX, forceLookY }) {
      const [mouse, setMouse] = useState({ x: 0, y: 0 });
      const ref = useRef(null);

      useEffect(() => {
            const h = (e) => setMouse({ x: e.clientX, y: e.clientY });
            window.addEventListener("mousemove", h);
            return () => window.removeEventListener("mousemove", h);
      }, []);

      const getPos = () => {
            if (!ref.current) return { x: 0, y: 0 };
            if (forceLookX !== undefined && forceLookY !== undefined) return { x: forceLookX, y: forceLookY };
            const rect = ref.current.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = mouse.x - cx;
            const dy = mouse.y - cy;
            const dist = Math.min(Math.sqrt(dx ** 2 + dy ** 2), maxDistance);
            const angle = Math.atan2(dy, dx);
            return { x: Math.cos(angle) * dist, y: Math.sin(angle) * dist };
      };

      const pos = getPos();
      return (
            <div
                  ref={ref}
                  style={{
                        width: `${size}px`,
                        height: isBlinking ? "2px" : `${size}px`,
                        backgroundColor: eyeColor,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        transition: "all 0.15s",
                  }}
            >
                  {!isBlinking && (
                        <div
                              style={{
                                    width: `${pupilSize}px`,
                                    height: `${pupilSize}px`,
                                    backgroundColor: pupilColor,
                                    borderRadius: "50%",
                                    transform: `translate(${pos.x}px, ${pos.y}px)`,
                                    transition: "transform 0.1s ease-out",
                              }}
                        />
                  )}
            </div>
      );
}

// ─── Characters Scene (LEFT PANEL) ───────────────────────────────────────────
function CharactersScene({ isTypingEmail, password, showPassword }) {
      const [mouse, setMouse] = useState({ x: 0, y: 0 });
      const [isPurpleBlinking, setIsPurpleBlinking] = useState(false);
      const [isBlackBlinking, setIsBlackBlinking] = useState(false);
      const [isLookingAtEachOther, setIsLookingAtEachOther] = useState(false);
      const [isPurplePeeking, setIsPurplePeeking] = useState(false);

      const purpleRef = useRef(null);
      const blackRef = useRef(null);
      const yellowRef = useRef(null);
      const orangeRef = useRef(null);

      useEffect(() => {
            const h = (e) => setMouse({ x: e.clientX, y: e.clientY });
            window.addEventListener("mousemove", h);
            return () => window.removeEventListener("mousemove", h);
      }, []);

      useEffect(() => {
            const schedule = () => {
                  const t = setTimeout(
                        () => {
                              setIsPurpleBlinking(true);
                              setTimeout(() => {
                                    setIsPurpleBlinking(false);
                                    schedule();
                              }, 150);
                        },
                        Math.random() * 4000 + 3000,
                  );
                  return t;
            };
            const t = schedule();
            return () => clearTimeout(t);
      }, []);

      useEffect(() => {
            const schedule = () => {
                  const t = setTimeout(
                        () => {
                              setIsBlackBlinking(true);
                              setTimeout(() => {
                                    setIsBlackBlinking(false);
                                    schedule();
                              }, 150);
                        },
                        Math.random() * 4000 + 3000,
                  );
                  return t;
            };
            const t = schedule();
            return () => clearTimeout(t);
      }, []);

      useEffect(() => {
            if (isTypingEmail) {
                  setIsLookingAtEachOther(true);
                  const t = setTimeout(() => setIsLookingAtEachOther(false), 800);
                  return () => clearTimeout(t);
            } else {
                  setIsLookingAtEachOther(false);
            }
      }, [isTypingEmail]);

      useEffect(() => {
            if (password.length > 0 && showPassword) {
                  const t = setTimeout(
                        () => {
                              setIsPurplePeeking(true);
                              setTimeout(() => setIsPurplePeeking(false), 800);
                        },
                        Math.random() * 3000 + 2000,
                  );
                  return () => clearTimeout(t);
            } else {
                  setIsPurplePeeking(false);
            }
      }, [password, showPassword, isPurplePeeking]);

      const calcPos = (ref) => {
            if (!ref.current) return { faceX: 0, faceY: 0, bodySkew: 0 };
            const rect = ref.current.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 3;
            const dx = mouse.x - cx;
            const dy = mouse.y - cy;
            return {
                  faceX: Math.max(-15, Math.min(15, dx / 20)),
                  faceY: Math.max(-10, Math.min(10, dy / 30)),
                  bodySkew: Math.max(-6, Math.min(6, -dx / 120)),
            };
      };

      const purplePos = calcPos(purpleRef);
      const blackPos = calcPos(blackRef);
      const yellowPos = calcPos(yellowRef);
      const orangePos = calcPos(orangeRef);

      const hidingPassword = password.length > 0 && !showPassword;
      const revealingPassword = password.length > 0 && showPassword;

      return (
            <div className="w-full h-full hidden  md:flex flex-col justify-between  overflow-hidden" style={{ backgroundColor: "#0a0a0a" }}>
                  {/* Characters */}
                  <div className="relative z-10 flex  items-center h-full justify-center">
                        <div className="relative" style={{ width: "420px", height: "300px" }}>
                              {/* Purple – back */}
                              <div
                                    ref={purpleRef}
                                    className="absolute bottom-0 transition-all duration-700 ease-in-out"
                                    style={{
                                          left: "50px",
                                          width: "130px",
                                          height: isTypingEmail || hidingPassword ? "340px" : "300px",
                                          backgroundColor: "#6C3FF5",
                                          borderRadius: "8px 8px 0 0",
                                          zIndex: 1,
                                          transform: revealingPassword ? "skewX(0deg)" : isTypingEmail || hidingPassword ? `skewX(${(purplePos.bodySkew || 0) - 12}deg) translateX(30px)` : `skewX(${purplePos.bodySkew || 0}deg)`,
                                          transformOrigin: "bottom center",
                                    }}
                              >
                                    <div
                                          className="absolute flex gap-5 transition-all duration-700 ease-in-out"
                                          style={{
                                                left: revealingPassword ? "14px" : isLookingAtEachOther ? "40px" : `${32 + purplePos.faceX}px`,
                                                top: revealingPassword ? "24px" : isLookingAtEachOther ? "48px" : `${30 + purplePos.faceY}px`,
                                          }}
                                    >
                                          {[0, 1].map((i) => (
                                                <EyeBall key={i} size={16} pupilSize={6} maxDistance={4} eyeColor="white" isBlinking={isPurpleBlinking} forceLookX={revealingPassword ? (isPurplePeeking ? 4 : -4) : isLookingAtEachOther ? 3 : undefined} forceLookY={revealingPassword ? (isPurplePeeking ? 5 : -4) : isLookingAtEachOther ? 4 : undefined} />
                                          ))}
                                    </div>
                              </div>

                              {/* Black – middle */}
                              <div
                                    ref={blackRef}
                                    className="absolute bottom-0 transition-all duration-700 ease-in-out"
                                    style={{
                                          left: "176px",
                                          width: "90px",
                                          height: "190px",
                                          backgroundColor: "#161616",
                                          borderRadius: "6px 6px 0 0",
                                          zIndex: 2,
                                          border: "1px solid #262626",
                                          transform: revealingPassword ? "skewX(0deg)" : isLookingAtEachOther ? `skewX(${(blackPos.bodySkew || 0) * 1.5 + 10}deg) translateX(14px)` : isTypingEmail || hidingPassword ? `skewX(${(blackPos.bodySkew || 0) * 1.5}deg)` : `skewX(${blackPos.bodySkew || 0}deg)`,
                                          transformOrigin: "bottom center",
                                    }}
                              >
                                    <div
                                          className="absolute flex gap-4 transition-all duration-700 ease-in-out"
                                          style={{
                                                left: revealingPassword ? "8px" : isLookingAtEachOther ? "24px" : `${18 + blackPos.faceX}px`,
                                                top: revealingPassword ? "20px" : isLookingAtEachOther ? "10px" : `${24 + blackPos.faceY}px`,
                                          }}
                                    >
                                          {[0, 1].map((i) => (
                                                <EyeBall key={i} size={14} pupilSize={5} maxDistance={3} eyeColor="white" isBlinking={isBlackBlinking} forceLookX={revealingPassword ? -4 : isLookingAtEachOther ? 0 : undefined} forceLookY={revealingPassword ? -4 : isLookingAtEachOther ? -4 : undefined} />
                                          ))}
                                    </div>
                              </div>

                              {/* Orange – front left */}
                              <div
                                    ref={orangeRef}
                                    className="absolute bottom-0 transition-all duration-700 ease-in-out"
                                    style={{
                                          left: "0px",
                                          width: "180px",
                                          height: "130px",
                                          zIndex: 3,
                                          backgroundColor: "#FF9B6B",
                                          borderRadius: "90px 90px 0 0",
                                          transform: revealingPassword ? "skewX(0deg)" : `skewX(${orangePos.bodySkew || 0}deg)`,
                                          transformOrigin: "bottom center",
                                    }}
                              >
                                    <div
                                          className="absolute flex gap-5 transition-all duration-200 ease-out"
                                          style={{
                                                left: revealingPassword ? "38px" : `${60 + (orangePos.faceX || 0)}px`,
                                                top: revealingPassword ? "60px" : `${65 + (orangePos.faceY || 0)}px`,
                                          }}
                                    >
                                          {[0, 1].map((i) => (
                                                <Pupil key={i} size={11} maxDistance={4} forceLookX={revealingPassword ? -5 : undefined} forceLookY={revealingPassword ? -4 : undefined} />
                                          ))}
                                    </div>
                              </div>

                              {/* Yellow – front right */}
                              <div
                                    ref={yellowRef}
                                    className="absolute bottom-0 transition-all duration-700 ease-in-out"
                                    style={{
                                          left: "242px",
                                          width: "110px",
                                          height: "165px",
                                          backgroundColor: "#E8D754",
                                          borderRadius: "55px 55px 0 0",
                                          zIndex: 4,
                                          transform: revealingPassword ? "skewX(0deg)" : `skewX(${yellowPos.bodySkew || 0}deg)`,
                                          transformOrigin: "bottom center",
                                    }}
                              >
                                    <div
                                          className="absolute flex gap-4 transition-all duration-200 ease-out"
                                          style={{
                                                left: revealingPassword ? "14px" : `${38 + (yellowPos.faceX || 0)}px`,
                                                top: revealingPassword ? "26px" : `${30 + (yellowPos.faceY || 0)}px`,
                                          }}
                                    >
                                          {[0, 1].map((i) => (
                                                <Pupil key={i} size={11} maxDistance={4} forceLookX={revealingPassword ? -5 : undefined} forceLookY={revealingPassword ? -4 : undefined} />
                                          ))}
                                    </div>
                                    <div
                                          className="absolute rounded-full transition-all duration-200 ease-out"
                                          style={{
                                                width: "54px",
                                                height: "3px",
                                                backgroundColor: "#0a0a0a",
                                                left: revealingPassword ? "10px" : `${28 + (yellowPos.faceX || 0)}px`,
                                                top: revealingPassword ? "64px" : `${64 + (yellowPos.faceY || 0)}px`,
                                          }}
                                    />
                              </div>
                        </div>
                  </div>
            </div>
      );
}

// ─── Login Page ───────────────────────────────────────────────────────────────
const Login = () => {
      const [showPassword, setShowPassword] = useState(false);
      const [isEmailFocused, setIsEmailFocused] = useState(false);
      const [passwordValue, setPasswordValue] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [errors, setErrors] = useState({});
      const [isSubmitting, setIsSubmitting] = useState(false);

      const validate = () => {
            const e = {};
            if (!email) e.email = "Email is required";
            if (!password) e.password = "Password is required";
            else if (password.length < 8) e.password = "Must be 8 characters";
            return e;
      };

      const handleSubmit = async (e) => {
            e.preventDefault();
            const errs = validate();
            if (Object.keys(errs).length > 0) {
                  setErrors(errs);
                  return;
            }
            setErrors({});
            setIsSubmitting(true);
            // 👉 your login logic here
            await new Promise((r) => setTimeout(r, 1000));
            setIsSubmitting(false);
      };

      return (
            <div className="h-dvh flex flex-col md:flex-row overflow-hidden">
                  {/* ── LEFT: Animated characters ── */}
                  <div className="flex-1 hidden md:block">
                        <CharactersScene isTypingEmail={isEmailFocused} password={passwordValue} showPassword={showPassword} />
                  </div>

                  {/* ── RIGHT: Sign-in form ── */}
                  <section className="flex-1 h-full flex items-center justify-center p-8" style={{ backgroundColor: "#0a0a0a", borderLeft: "1px solid #1a1a1a" }}>
                        <div className="w-full max-w-md flex flex-col gap-6">
                              {/* Heading */}
                              <div>
                                    <h1 className="text-4xl md:text-5xl font-semibold leading-tight" style={{ color: "#fafafa" }}>
                                          Welcome
                                          <span className="font-light" style={{ color: "#525252" }}>
                                                back
                                          </span>
                                    </h1>
                                    <p className="mt-2 text-sm" style={{ color: "#525252" }}>
                                          Access your account and continue your journey
                                    </p>
                              </div>

                              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                                    {/* Email */}
                                    <div>
                                          <Input label="Email Address" type="email" placeholder="Enter your email address" star value={email} onChange={(e) => setEmail(e.target.value)} onFocus={() => setIsEmailFocused(true)} onBlur={() => setIsEmailFocused(false)} disabled={isSubmitting} />
                                          {errors.email && <span className="text-red-400 text-xs mt-1 block">{errors.email}</span>}
                                    </div>

                                    {/* Password */}
                                    <div>
                                          <label className="text-sm font-medium block mb-1" style={{ color: "#a1a1aa" }}>
                                                Password <span className="text-red-400">*</span>
                                          </label>
                                          <div className="rounded-2xl transition-colors focus-within:border-violet-500" style={{ backgroundColor: "#161616", border: "1px solid #262626" }}>
                                                <div className="relative">
                                                      <input
                                                            type={showPassword ? "text" : "password"}
                                                            placeholder="Enter your password"
                                                            value={password}
                                                            onChange={(e) => {
                                                                  setPassword(e.target.value);
                                                                  setPasswordValue(e.target.value);
                                                            }}
                                                            disabled={isSubmitting}
                                                            className="w-full bg-transparent text-sm p-4 pr-12 rounded-2xl focus:outline-none"
                                                            style={{ color: "#fafafa" }}
                                                      />
                                                      <button type="button" onClick={() => setShowPassword((v) => !v)} className="absolute inset-y-0 right-3 flex items-center transition-colors" style={{ color: "#525252" }} tabIndex={-1}>
                                                            {showPassword ? (
                                                                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-4-9-7 0-1.13.4-2.18 1.07-3.07M6.53 6.53A9.956 9.956 0 0112 5c5 0 9 4 9 7a9.956 9.956 0 01-1.53 3.47M15 12a3 3 0 01-3 3m0 0a3 3 0 01-3-3m3 3v.01M3 3l18 18" />
                                                                  </svg>
                                                            ) : (
                                                                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                                  </svg>
                                                            )}
                                                      </button>
                                                </div>
                                          </div>
                                          {errors.password && <span className="text-red-400 text-xs mt-1 block">{errors.password}</span>}
                                    </div>

                                    {/* Submit */}
                                    <button type="submit" disabled={isSubmitting} className={`w-full rounded-2xl py-4 font-medium transition-colors text-sm flex items-center justify-center gap-2 ${isSubmitting ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`} style={{ backgroundColor: "#fafafa", color: "#0a0a0a" }}>
                                          {isSubmitting ? (
                                                <>
                                                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                                      </svg>
                                                      Signing in…
                                                </>
                                          ) : (
                                                "Sign In"
                                          )}
                                    </button>
                              </form>

                              {/* Divider */}
                              <div className="relative flex items-center justify-center">
                                    <span className="w-full" style={{ borderTop: "1px solid #1a1a1a" }} />
                                    <span className="px-4 text-xs absolute whitespace-nowrap" style={{ color: "#333333", backgroundColor: "#0a0a0a" }}>
                                          Or continue with
                                    </span>
                              </div>

                              {/* Google */}
                              <button type="button" className="w-full flex items-center justify-center gap-3 rounded-2xl py-4 text-sm transition-colors" style={{ border: "1px solid #262626", color: "#a1a1aa", backgroundColor: "transparent" }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#161616")} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}>
                                    <GoogleIcon />
                                    Continue with Google
                              </button>

                              {/* Sign up */}
                              <p className="text-center text-sm" style={{ color: "#525252" }}>
                                    New here?{" "}
                                    <a href="/create-account" className="text-violet-400 hover:underline transition-colors">
                                          Create Account
                                    </a>
                              </p>
                        </div>
                  </section>
            </div>
      );
};

export default Login;
