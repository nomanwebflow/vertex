document.addEventListener("DOMContentLoaded", (() => {
    "undefined" == typeof window.gsap && document.documentElement.classList.add("gsap-not-found");
    gsap.registerPlugin(ScrollTrigger);
    
    // FIX: Refresh ScrollTrigger after page load to handle scrolled positions
    window.addEventListener('load', () => {
        ScrollTrigger.refresh();
    });
    
    // FIX: Also refresh on page show (handles back/forward navigation)
    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            ScrollTrigger.refresh();
        }
    });
    
    // Initial refresh for immediate scroll position
    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 100);
}));

document.addEventListener("DOMContentLoaded", (() => {
    const e = document.querySelector(".lp_nav_component"),
        t = document.querySelector(".lp_hero_trigger");
    if (!e || !t) return;
    new IntersectionObserver((t => {
        t.forEach((t => {
            e.classList.toggle("is-fixed", !t.isIntersecting)
        }))
    }), {
        threshold: 0
    }).observe(t);
    const o = () => document.body.classList.toggle("nav-opened");
    document.querySelector(".nav_btn_wrap")?.addEventListener("click", o);
    document.querySelector(".lp_nav_overlay")?.addEventListener("click", o);
    
    new Swiper(".lp_testimonials_slider_element.swiper", {
        speed: 900,
        slidesPerView: "auto",
        grabCursor: !0,
        slideToClickedSlide: !0,
        spaceBetween: 30,
        watchSlidesProgress: !0,
        loopAdditionalSlides: 20,
        autoHeight: !1
    });
    
    new Swiper("[hero-works-slider]", {
        grabCursor: !0,
        watchSlidesProgress: !0,
        autoplay: {
            delay: 3e3,
            disableOnInteraction: !1
        },
        loop: !0,
        speed: 600,
        keyboard: {
            enabled: !0,
            onlyInViewport: !0
        },
        slidesPerView: "auto",
        centeredSlides: !0,
        slideToClickedSlide: !0,
        observer: !0,
        observeParents: !0,
        on: {
            progress(e) {
                const t = e.slides.length;
                e.slides.forEach((e => {
                    const o = e.progress,
                        r = Math.abs(o);
                    let n = 5 * o;
                    if (r > .7 && r < 1.3) {
                        const e = r < 1 ? (1 - r) / .3 : (r - 1) / .3;
                        n *= Math.max(0, Math.min(1, e))
                    }
                    e.style.transform = `translateX(${n}%) scale(${1-.08*r})`;
                    e.style.zIndex = t - Math.abs(Math.round(o));
                    e.style.opacity = r > 2.9 ? 0 : 1
                }))
            },
            setTransition(e, t) {
                e.slides.forEach((e => {
                    e.style.transition = `transform ${t}ms ease, opacity ${t}ms ease`
                }))
            }
        }
    });
    
    const r = document.querySelector(".lp_works_section");
    window.addEventListener("scroll", (() => {
        if (!r || !e) return;
        const t = r.getBoundingClientRect(),
            o = t.top <= 0 && t.bottom > 0;
        r.classList.toggle("theme-dark", o);
        e.classList.toggle("theme-dark", o)
    }));
    
    const n = document.querySelectorAll("[data-tooltip-target]");
    if (n.length > 0) {
        const e = () => {
            n.forEach((e => {
                const t = e.getAttribute("data-tooltip-text");
                t && tippy(e, {
                    content: t,
                    theme: "custom",
                    arrow: !1
                })
            }))
        }, t = () => {
            if (window.tippy) return e();
            const t = e => new Promise(((t, o) => {
                const r = document.createElement("script");
                r.src = e;
                r.onload = t;
                r.onerror = o;
                document.head.appendChild(r)
            }));
            t("https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js").then((() => t("https://unpkg.com/tippy.js@6/dist/tippy-bundle.umd.min.js"))).then((() => e()))["catch"]((e => console.error("Failed to load Tippy.js:", e)))
        };
        ["mouseover", "touchstart", "focus"].forEach((e => document.addEventListener(e, t, {
            once: !0,
            passive: !0
        })))
    }
}));

document.addEventListener("DOMContentLoaded", (() => {
    const e = document.querySelectorAll(".lp_hero_section");
    e.length && e.forEach((e => {
        if (e.style.visibility = "visible", window.innerWidth < 992) return;
        const t = gsap.timeline({
            scrollTrigger: {
                trigger: e,
                start: "top bottom",
                once: !0
            },
            defaults: {
                ease: "back.out",
                duration: .5
            }
        }), o = e.querySelector(".lp_hero_logo");
        o && t.from(o, {
            opacity: 0,
            y: "2rem"
        }, .1);
        const r = e.querySelector(".text-size-eyebrow");
        r && t.from(r, {
            opacity: 0,
            y: "2rem"
        }, .1);
        const n = e.querySelector("h1");
        n && t.from(n, {
            opacity: 0,
            y: "40%"
        }, .15);
        const s = e.querySelector("p");
        s && t.from(s, {
            opacity: 0,
            y: "100%"
        }, .2);
        const i = e.querySelectorAll(".button-group > *");
        i && t.from(i, {
            opacity: 0,
            y: "100%",
            stagger: {
                amount: .1
            }
        }, .25);
        const l = e.querySelectorAll(".lp_hero_marquee_logo");
        l && t.from(l, {
            opacity: 0,
            y: "100%",
            stagger: {
                amount: .45
            }
        }, .3);
        const a = e.querySelector(".lp_hero_slider_component");
        a && t.from(a, {
            opacity: 0,
            y: "5rem"
        }, .35)
    }))
}));

document.addEventListener("DOMContentLoaded", (() => {
    const e = document.querySelectorAll(".lp_services_section");
    e.length && e.forEach((e => {
        e.style.visibility = "visible";
        const t = gsap.timeline({
            scrollTrigger: {
                trigger: e,
                start: "top 70%",
                once: !0
            },
            defaults: {
                ease: "back.out",
                duration: .5
            }
        }), o = e.querySelector("h2");
        o && t.from(o, {
            opacity: 0,
            y: "40%"
        }, 0)
    }))
}));

document.addEventListener("DOMContentLoaded", (() => {
    const e = document.querySelectorAll(".lp_services_block_wrap, .lp_works_item");
    e.length && e.forEach((e => {
        e.style.visibility = "visible";
        gsap.timeline({
            scrollTrigger: {
                trigger: e,
                start: "top 80%",
                once: !0
            },
            defaults: {
                ease: "back.out",
                duration: .7
            }
        }).from(e, {
            opacity: 0,
            y: "5rem"
        })
    }))
}));

document.addEventListener("DOMContentLoaded", (() => {
    const e = document.querySelectorAll(".lp_works_section");
    e.length && e.forEach((e => {
        e.style.visibility = "visible";
        const t = gsap.timeline({
            scrollTrigger: {
                trigger: e,
                start: "top 70%",
                once: !0
            },
            defaults: {
                ease: "back.out",
                duration: .5
            }
        }), o = e.querySelector("h2");
        o && t.from(o, {
            opacity: 0,
            y: "40%"
        }, 0);
        const r = e.querySelector("p");
        r && t.from(r, {
            opacity: 0,
            y: "100%"
        }, 0)
    }))
}));

document.addEventListener("DOMContentLoaded", (() => {
    const e = document.querySelectorAll("[data-animate-button]");
    e.length && e.forEach((e => {
        e.style.visibility = "visible";
        const t = gsap.timeline({
            scrollTrigger: {
                trigger: e,
                start: "top 70%",
                once: !0
            },
            defaults: {
                ease: "back.out",
                duration: .5
            }
        }), o = e.querySelectorAll(".button_component");
        o && t.from(o, {
            opacity: 0,
            y: "100%",
            stagger: {
                amount: .1
            }
        }, .25)
    }))
}));

document.addEventListener("DOMContentLoaded", (() => {
    const e = document.querySelectorAll(".lp_testimonials_section");
    e.length && e.forEach((e => {
        e.style.visibility = "visible";
        const t = gsap.timeline({
            scrollTrigger: {
                trigger: e,
                start: "top 70%",
                once: !0
            },
            defaults: {
                ease: "back.out",
                duration: .5
            }
        }), o = e.querySelector("h2");
        o && t.from(o, {
            opacity: 0,
            y: "40%"
        }, 0);
        const r = e.querySelectorAll(".lp_testimonials_slider_element > *");
        r && t.from(r, {
            opacity: 0,
            y: "10%",
            duration: .7,
            stagger: {
                amount: .5
            }
        }, .15)
    }))
}));

document.addEventListener("DOMContentLoaded", (() => {
    const e = document.querySelectorAll(".lp_about_section");
    e.length && e.forEach((e => {
        e.style.visibility = "visible";
        const t = gsap.timeline({
            scrollTrigger: {
                trigger: e,
                start: "top 70%",
                once: !0
            },
            defaults: {
                ease: "back.out",
                duration: .5
            }
        }), o = e.querySelector("h2");
        o && t.from(o, {
            opacity: 0,
            y: "40%"
        }, 0);
        const r = e.querySelector("p");
        r && t.from(r, {
            opacity: 0,
            y: "100%"
        }, .08);
        const n = e.querySelectorAll(".lp_cards_layout > *");
        n && t.from(n, {
            opacity: 0,
            y: "40%",
            duration: .7,
            stagger: .05
        }, .21);
        const s = e.querySelectorAll(".lp_about_card_team_img_wrap > *");
        s && t.from(s, {
            opacity: 0,
            x: "100%",
            scale: .1,
            duration: .6,
            stagger: .05
        }, .8)
    }))
}));

document.addEventListener("DOMContentLoaded", (() => {
    const e = document.querySelectorAll(".lp_founder_section");
    e.length && e.forEach((e => {
        e.style.visibility = "visible";
        const t = gsap.timeline({
            scrollTrigger: {
                trigger: e,
                start: "top 70%",
                once: !0
            },
            defaults: {
                ease: "back.out",
                duration: .5
            }
        }), o = e.querySelector("h2");
        o && t.from(o, {
            opacity: 0,
            y: "40%"
        }, 0);
        const r = e.querySelectorAll("p");
        r && t.from(r, {
            opacity: 0,
            y: "20%"
        }, .05);
        const n = e.querySelectorAll(".button-group > *");
        n && t.from(n, {
            opacity: 0,
            y: "100%",
            stagger: {
                amount: .1
            }
        }, .21);
        const s = e.querySelectorAll("img");
        s && t.from(s, {
            opacity: 0,
            y: "20%",
            duration: .7
        }, .25)
    }))
}));

document.addEventListener("DOMContentLoaded", (() => {
    const e = document.querySelectorAll(".lp_branding_section");
    e.length && e.forEach((e => {
        e.style.visibility = "visible";
        const t = gsap.timeline({
            scrollTrigger: {
                trigger: e,
                start: "top 70%",
                once: !0
            },
            defaults: {
                ease: "back.out",
                duration: .5
            }
        }), o = e.querySelector("h2");
        o && t.from(o, {
            opacity: 0,
            y: "40%"
        }, 0);
        const r = e.querySelectorAll(".lp_branding_layout");
        r && t.from(r, {
            opacity: 0,
            y: "10%",
            duration: 1,
            ease: "back.inOut",
            stagger: .1
        }, .25)
    }))
}));

document.addEventListener("DOMContentLoaded", (() => {
    const e = document.querySelectorAll(".lp_process_section");
    e.length && e.forEach((e => {
        e.style.visibility = "visible";
        const t = gsap.timeline({
            scrollTrigger: {
                trigger: e,
                start: "top 70%",
                once: !0
            },
            defaults: {
                ease: "back.out",
                duration: .5
            }
        }), o = e.querySelector("h2");
        o && t.from(o, {
            opacity: 0,
            y: "40%"
        }, 0);
        const r = e.querySelectorAll(".lp_cards_layout > *");
        r && t.from(r, {
            opacity: 0,
            y: "40%",
            duration: .7,
            stagger: .05
        }, .61);
        const n = e.querySelectorAll(".lp_cards_img");
        n && t.from(n, {
            opacity: 0,
            scale: .1,
            duration: .8,
            stagger: .05,
            transformOrigin: "100% 100%"
        }, 1.02);
        const s = e.querySelectorAll(".chat_wrap");
        s && t.from(s, {
            opacity: 0,
            scale: .1,
            duration: .8,
            stagger: .05,
            transformOrigin: "100% 0%"
        }, 1.02);
        const i = e.querySelectorAll(".chat_date");
        i && t.from(i, {
            opacity: 0,
            y: "100%",
            duration: .2
        }, 2.12);
        const l = e.querySelectorAll(".chat_wrap > *:not(.chat_bg, .chat_date, .chat_date-wrap)");
        l && t.from(l, {
            opacity: 0,
            y: "2rem",
            duration: 1.4,
            stagger: .3
        }, 2.01)
    }))
}));

document.addEventListener("DOMContentLoaded", (() => {
    const e = document.querySelectorAll(".lp_faq_section");
    e.length && e.forEach((e => {
        e.style.visibility = "visible";
        const t = gsap.timeline({
            scrollTrigger: {
                trigger: e,
                start: "top 70%",
                once: !0
            },
            defaults: {
                ease: "back.out",
                duration: .5
            }
        }), o = e.querySelector("h2");
        o && t.from(o, {
            opacity: 0,
            y: "40%"
        }, 0);
        const r = e.querySelectorAll(".accordion_list > *, .lp_cta_wrap");
        r && t.from(r, {
            opacity: 0,
            y: "40%",
            duration: .7,
            stagger: .05
        }, .5)
    }))
}));

document.addEventListener("DOMContentLoaded", (() => {
    gsap.to(".nav_progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
            trigger: ".page-wrapper",
            start: "top top",
            end: "bottom bottom",
            scrub: !0
        }
    })
}));

document.addEventListener("DOMContentLoaded", (() => {
    gsap.fromTo(".footer_component", {
        y: "50%"
    }, {
        y: "0%",
        ease: "none",
        scrollTrigger: {
            trigger: ".main-wrapper",
            start: "bottom bottom",
            end: "bottom 60%",
            scrub: !0
        }
    })
}));