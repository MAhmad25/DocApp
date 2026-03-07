function Signup() {
      const handleSubmit = (event) => {
            event.preventDefault();
      };

      return (
            <main className="relative flex min-h-dvh w-full items-center justify-center overflow-x-hidden bg-[var(--bg-back-primary)] px-3 py-4 text-[var(--txt)] sm:px-4 sm:py-6">
                  <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[min(68vh,380px)] w-[min(95vw,480px)] -translate-x-1/2 -translate-y-1/2 sm:h-[min(72vh,410px)] sm:w-[min(90vw,510px)] md:h-[min(74vh,420px)] md:w-[min(88vw,520px)]">
                        <span className="absolute -left-4 -right-4 top-0 h-[2px] bg-[repeating-linear-gradient(90deg,_#434344_0_1px,_transparent_3px_5px)] sm:-left-8 sm:-right-8" />
                        <span className="absolute -left-4 -right-4 bottom-0 h-[2px] bg-[repeating-linear-gradient(90deg,_#434344_0_1px,_transparent_3px_5px)] sm:-left-8 sm:-right-8" />
                        <span className="absolute -bottom-4 -top-4 left-0 w-[2px] bg-[repeating-linear-gradient(180deg,_#434344_0_1px,_transparent_3px_5px)] sm:-bottom-8 sm:-top-8" />
                        <span className="absolute -bottom-4 -top-4 right-0 w-[2px] bg-[repeating-linear-gradient(180deg,_#434344_0_1px,_transparent_3px_5px)] sm:-bottom-8 sm:-top-8" />
                  </div>

                  <section className="relative z-10 w-full max-w-[350px] sm:max-w-[430px]">
                        <header className="mb-6 flex items-center justify-center gap-2.5 sm:mb-8 sm:gap-3">
                              <div className="h-8 w-8 flex-none sm:h-10 sm:w-10" aria-hidden="true">
                                    <svg viewBox="0 0 64 64" role="presentation" className="block h-full w-full">
                                          <rect x="0" y="0" width="64" height="64" rx="14" fill="#030509" />
                                          <path d="M15 51L26.8 14H36L24.2 51H15Z" fill="#FFFFFF" />
                                          <path d="M28 14H37.2L49 51H39.8L28 14Z" fill="#FFFFFF" />
                                          <rect x="23.5" y="31.5" width="17" height="7" rx="3.5" fill="#030509" />
                                    </svg>
                              </div>
                              <h1 className="m-0 text-[34px] leading-none font-bold tracking-[-0.02em] sm:text-[40px] md:text-[44px]">Doc</h1>
                        </header>

                        <form className="flex w-full flex-col gap-3 sm:gap-4" onSubmit={handleSubmit}>
                              <div className="flex flex-col gap-1.5 sm:gap-2">
                                    <label className="text-[14px] leading-none font-medium tracking-[-0.01em] sm:text-[16px]" htmlFor="signup-email">
                                          Email
                                    </label>
                                    <input className="h-[42px] w-full rounded-[10px] border border-[#c8cdd3] px-3 text-[15px] leading-none tracking-[-0.01em] shadow-[0_1px_0_rgba(255,255,255,0.58),0_5px_12px_rgba(0,0,0,0.08)] outline-none placeholder:text-[#8a929b] focus:border-[#9ba2ab] focus:shadow-[0_0_0_2px_rgba(140,147,155,0.18),0_5px_14px_rgba(0,0,0,0.1)] sm:h-[46px] sm:rounded-[12px] sm:px-4 sm:text-[17px]" id="signup-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
                              </div>

                              <div className="flex flex-col gap-1.5 sm:gap-2">
                                    <label className="text-[14px] leading-none font-medium tracking-[-0.01em] sm:text-[16px]" htmlFor="signup-password">
                                          Password
                                    </label>
                                    <input className="h-[42px] w-full rounded-[10px] border border-[#c8cdd3] px-3 text-[15px] leading-none  shadow-[0_1px_0_rgba(255,255,255,0.58),0_5px_12px_rgba(0,0,0,0.08)] outline-none placeholder:text-[#8a929b] focus:border-[#9ba2ab] focus:shadow-[0_0_0_2px_rgba(140,147,155,0.18),0_5px_14px_rgba(0,0,0,0.1)] sm:h-[46px] sm:rounded-[12px] sm:px-4 sm:text-[17px] " id="signup-password" name="password" type="password" autoComplete="current-password" placeholder="password" />
                              </div>

                              <button className="mt-1 h-[46px] w-full cursor-pointer border border-[#c8cdd3] rounded-[12px] leading-none font-semibold   transition-transform duration-200 ease-out hover:-translate-y-px active:translate-y-px sm:h-[50px] sm:rounded-[14px] sm:text-[16px]" type="submit">
                                    Sign in
                              </button>
                        </form>
                  </section>
            </main>
      );
}

export default Signup;
