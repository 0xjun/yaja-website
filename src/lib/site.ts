/**
 * Single source of truth for site-wide content.
 * Update numbers / copy / links here and all sections re-render automatically.
 *
 * Numbers from: YAJA Inc_회사소개서.pdf
 * Reference structure: oasiz.org (mirror — only colors/fonts/logo differ)
 */

export const site = {
  name: "YAJA Inc.",
  url: "https://yajacamp.com",
  email: "info@yajacamp.com",
  description: "대한민국 No.1 숏폼 드라마 스튜디오",
  tagline: "고객님의 성장을 이끄는 최적의 파트너로",
  address: "Seoul, Republic of Korea",
} as const;

/** Hero section primary copy. */
export const hero = {
  eyebrow: "K-Short Drama Studio · Est. 2024",
  headline: ["대한민국", "No.1", "숏폼 드라마", "스튜디오"],
  subhead: "고객님의 성장을 이끄는 최적의 파트너로",
} as const;

/** OASIZ-style: 2 prominent stats with descriptions + smaller supporting. */
export const heroStats = {
  primary: [
    {
      label: "1편당 평균 조회수",
      value: 682,
      unit: "만회",
      note: "100만 조회 이상의 비율 97%",
    },
    {
      label: "운용 누적 조회수",
      value: 19,
      unit: "억회",
      note: "총 팔로워 183만",
    },
  ],
} as const;

/** Top-level KPI numbers shown beneath the hero (legacy alias). */
export const stats = [
  { label: "누적 조회수", value: "19억", numeric: 19, unit: "억" },
  { label: "총 팔로워", value: "183만", numeric: 183, unit: "만" },
  { label: "평균 조회수", value: "682만", numeric: 682, unit: "만" },
  { label: "100만+ 비율", value: "97%", numeric: 97, unit: "%" },
] as const;

/** Strategy / mission statement (OASIZ §3 equivalent). */
export const strategy = {
  eyebrow: "Strategy",
  // Bilingual mirror of OASIZ "売上から逆算した戦略設計×バズを生み出す力"
  ko: "매출에서 역산하는 전략 설계",
  separator: "×",
  ko2: "바이럴을 만들어내는 힘",
  description:
    "업계 최정상 크리에이터의 깊이 있는 노하우와 알고리즘에 대한 정통한 이해를 바탕으로, 숏폼 드라마를 통해 브랜드의 다음 이야기를 설계합니다.",
  cta: { label: "ABOUT", href: "#about" },
} as const;

/** OASIZ-style 5 service categories with bilingual labels. */
export const categories = [
  {
    no: "01",
    ko: "자체 운영 채널",
    en: "Owned Channels",
    description:
      "@yajacamp · @ycn_videographer 등 자체 보유 채널을 통한 IP 운영",
  },
  {
    no: "02",
    ko: "브랜드 콘텐츠",
    en: "Branded Contents",
    description: "브랜드 메시지를 시리즈 드라마에 자연스럽게 녹여내는 광고 포맷",
  },
  {
    no: "03",
    ko: "드라마 PPL",
    en: "Drama PPL",
    description: "기존 인기 드라마 에피소드 단위에 제품을 노출시키는 검증된 포맷",
  },
  {
    no: "04",
    ko: "오리지널 IP",
    en: "Original IP",
    description: "YAJA POP · CAMP · YCN 자체 IP 시리즈를 통한 직접 수익 모델",
  },
  {
    no: "05",
    ko: "분석 & 컨설팅",
    en: "Analytics & Consulting",
    description:
      "숏폼 시장 분석과 데이터 기반 컨설팅으로 클라이언트 캠페인 ROI 최적화",
  },
] as const;

/** Project case studies — OASIZ §5 (rich cards w/ vertical video). */
export const projects = [
  {
    brand: "Vaseline",
    handle: "@vaseline_korea",
    type: "Branded Contents",
    title: "Vaseline 시리즈 드라마 — 일상 속 케어 스토리",
    description:
      "에피소드 단위로 제품을 자연스럽게 녹여낸 브랜디드 시리즈. 단일 PR로 1,234만 조회 달성.",
    tags: ["MZ 도달", "숏폼 드라마", "브랜디드"],
    /** Video URL relative to /public. Drop file as
     * /public/videos/<slug>.mp4 then set this string. */
    video: "" as string,
    metric: {
      label: "1PR 총 조회수",
      value: "12,342,129",
      unit: "회",
    },
  },
  {
    brand: "SAMSUNG",
    handle: "@yajacamp",
    type: "Drama PPL",
    title: "Samsung Galaxy Buds 드라마 PPL",
    description:
      "야자캠프 인기 시리즈에 제품을 자연스럽게 노출. 2 에피소드로 4,544,123회 조회.",
    tags: ["테크", "MZ 도달", "PPL"],
    video: "" as string,
    metric: {
      label: "1PR 총 조회수",
      value: "4,544,123",
      unit: "회",
    },
  },
  {
    brand: "Adobe",
    handle: "@ycn_videographer",
    type: "Drama PPL",
    title: "Adobe Creative Tools 드라마 PPL",
    description:
      "크리에이티브 콘텐츠와 자연스러운 결합. 단일 에피소드 320만 조회.",
    tags: ["크리에이티브", "Z세대", "PPL"],
    video: "" as string,
    metric: {
      label: "1PR 총 조회수",
      value: "3,204,010",
      unit: "회",
    },
  },
  {
    brand: "PERSOL APAC",
    handle: "@persolapacdramas",
    type: "Account Operation",
    title: "PERSOL APAC 전용 드라마 계정 운영",
    description:
      "기획 · 제작 · 운영 풀-스택. 운영 1개월 시점 평균 조회수 315만 달성.",
    tags: ["계정 육성", "B2B", "글로벌"],
    video: "" as string,
    metric: {
      label: "평균 조회수 (1달)",
      value: "3,150,124",
      unit: "회",
    },
  },
] as const;

/** Trusted-by client logos (OASIZ §7 — static grid). */
export const clients = [
  "Vaseline",
  "Adobe",
  "SAMSUNG",
  "Dr Pepper",
  "TikTok",
  "Papa Recipe",
  "대한민국정부",
  "서울특별시",
  "국립세종수목원",
] as const;

/** Partnership banner (OASIZ §8 — ByteDance partnership equivalent). */
export const partnership = {
  eyebrow: "Partnership",
  copy: "YAJA는 TikTok Awards 2024 Video of the Year 수상 스튜디오로 선정되었습니다.",
  detail: "TikTok과의 공식 협력 관계를 바탕으로 글로벌 브랜드 캠페인을 전개합니다.",
  award: { title: "TikTok Awards 2024", category: "Video of the Year", year: 2024 },
} as const;

/** Column / blog teasers (OASIZ §9). */
export const column = [
  {
    date: "2026.04.30",
    category: "Industry",
    title: "쇼트드라마 시장의 현재와 미래 — 1조 원 시장으로의 도약",
    href: "#",
  },
] as const;

/** News (OASIZ §10 — date + category + title list). */
export const news = [
  {
    date: "2026.04.29",
    category: "Notice",
    title: "YAJA Inc. 공식 홈페이지 오픈",
  },
  {
    date: "2024.12.15",
    category: "Award",
    title: "TikTok Awards 2024 Video of the Year 수상",
  },
  {
    date: "2024.04.01",
    category: "Notice",
    title: "YAJA Inc. 설립",
  },
] as const;

/** Owned account showcase (kept for future /about page; unused on home). */
export const accounts = [
  {
    handle: "@ycn_videographer",
    title: "YCN",
    subtitle: "영찍남",
    cumulativeViews: "11억",
    followers: "131만",
    avgViews: "13,008,332",
    href: "https://www.tiktok.com/@ycn_videographer",
  },
  {
    handle: "@yajacamp",
    title: "YAJA CAMP",
    subtitle: "야자캠프",
    cumulativeViews: "8.3억",
    followers: "52.1만",
    avgViews: "6,894,245",
    href: "https://www.tiktok.com/@yajacamp",
  },
] as const;

/** Founders (kept for future /about page; unused on home). */
export const founders = [
  {
    name: "Yoojun Kang",
    role: "Co-founder & CEO",
    bio: "2022년 VTuber 에이전시 창업, IP 권리 인수. 2022년 일본 최대 숏폼드라마 스튜디오에 합류해 글로벌·로컬 시장에서 스튜디오를 성장시킨 경험을 쌓았습니다. 2024년 한국 최고의 크리에이터들과 YAJA Inc.를 설립.",
  },
  {
    name: "Lim Hyojun",
    role: "Co-founder & Chief Director",
    bio: "2019년 4KGOLD 프로덕션을 시작으로 뮤직비디오와 커머셜 영상을 제작해왔으며 2024년 YAJA를 설립하여 본격적으로 숏드라마 시장에 진출했습니다.",
  },
  {
    name: "Lee Daegeon",
    role: "Co-founder & Chief Director",
    bio: '"영찍남 YCN" 채널을 시작으로 숏폼콘텐츠와 숏드라마를 제작해왔으며 약 1년 만에 누적 조회수 8억 회를 달성, 2024 TikTok Awards 올해의 비디오상을 수상하였습니다.',
  },
] as const;

/** Awards (legacy — used by Partnership now). */
export const awards = [
  { title: "TikTok Awards 2024", category: "Video of the Year", year: 2024 },
] as const;

/** Service offerings (legacy alias for categories — kept for safety). */
export const services = categories;
