'use client';

import { motion } from 'framer-motion';
import { FallingPattern } from './FallingPattern';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut', delay },
    }),
};

function PenSvg() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
    );
}

function SparkSvg() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5L12 2z" />
        </svg>
    );
}

function ArrowSvg() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    );
}

function BlogCardMockup() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            className="w-full max-w-lg rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl overflow-hidden"
        >
            {/* Window bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-400/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <span className="w-3 h-3 rounded-full bg-green-400/70" />
                <span className="ml-3 text-xs text-white/40 font-mono">easyblog.ai — 생성 중</span>
            </div>

            {/* Input area */}
            <div className="px-5 py-4 border-b border-white/10">
                <p className="text-xs text-white/40 mb-2 font-mono uppercase tracking-wider">주제 입력</p>
                <div className="flex items-center gap-3 rounded-lg bg-white/5 border border-white/15 px-4 py-2.5">
                    <PenSvg />
                    <span className="text-sm text-white/70">"Next.js 16으로 빠른 웹 앱 만들기"</span>
                    <span className="ml-auto animate-pulse">
                        <SparkSvg />
                    </span>
                </div>
            </div>

            {/* Generated content */}
            <div className="px-5 py-4 space-y-3">
                <div className="flex items-center gap-2 mb-3">
                    <SparkSvg />
                    <span className="text-xs text-white/50 font-mono">AI 생성 완료 · 1.2초</span>
                </div>

                {/* Title */}
                <div className="h-5 w-4/5 rounded bg-white/20" />

                {/* Meta */}
                <div className="flex gap-2">
                    <div className="h-3 w-16 rounded bg-white/10" />
                    <div className="h-3 w-12 rounded bg-white/10" />
                    <div className="h-3 w-20 rounded bg-white/10" />
                </div>

                {/* Body lines */}
                <div className="space-y-2 pt-1">
                    <div className="h-3 w-full rounded bg-white/10" />
                    <div className="h-3 w-11/12 rounded bg-white/10" />
                    <div className="h-3 w-full rounded bg-white/10" />
                    <div className="h-3 w-4/5 rounded bg-white/10" />
                </div>

                {/* Tags */}
                <div className="flex gap-2 pt-2">
                    {['Next.js', 'React', 'SEO', '튜토리얼'].map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-full border border-white/15 text-white/50">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export function Hero() {
    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
            {/* Background */}
            <FallingPattern
                className="absolute inset-0"
                color="oklch(0.6 0.2 250)"
                duration={150}
                blurIntensity="1px"
            />

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center gap-8 text-center px-4 py-24 max-w-5xl mx-auto w-full">

                {/* Badge */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.1}
                    className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm text-white/80"
                >
                    <SparkSvg />
                    <span>AI 블로그 자동 생성 서비스</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.2}
                    className="text-5xl font-bold tracking-tight text-white sm:text-7xl leading-tight"
                >
                    주제만 입력하면
                    <br />
                    <span className="bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
                        블로그가 완성됩니다
                    </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.3}
                    className="max-w-xl text-lg text-white/60 leading-relaxed"
                >
                    Easyblog은 AI가 SEO 최적화된 고품질 블로그 포스트를 몇 초 만에 자동으로 작성합니다.
                    더 이상 빈 화면 앞에서 고민하지 마세요.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.4}
                    className="flex flex-col sm:flex-row gap-3"
                >
                    <button className="flex items-center justify-center gap-2 rounded-full bg-white text-black font-semibold px-8 py-3 hover:bg-white/90 transition-colors">
                        무료로 시작하기
                        <ArrowSvg />
                    </button>
                    <button className="flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-3 hover:bg-white/15 transition-colors">
                        데모 보기
                    </button>
                </motion.div>

                {/* Stats */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.45}
                    className="flex gap-8 text-white/50 text-sm"
                >
                    {[
                        { value: '1.2초', label: '평균 생성 시간' },
                        { value: '10만+', label: '생성된 포스트' },
                        { value: 'SEO', label: '자동 최적화' },
                    ].map(({ value, label }) => (
                        <div key={label} className="flex flex-col items-center gap-1">
                            <span className="text-white font-semibold text-lg">{value}</span>
                            <span>{label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Blog Card Mockup */}
                <BlogCardMockup />
            </div>
        </section>
    );
}
