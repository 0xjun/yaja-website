/**
 * Single source of truth for site-wide content.
 * Update numbers / copy / links here and all sections re-render automatically.
 *
 * Numbers from: YAJA Inc_회사소개서.pdf (latest 회사소개서)
 * Design system: /Users/yoojunkang/Downloads/Claude Code/reference/DESIGN.md
 */

export const site = {
  name: "YAJA Inc.",
  url: "https://yajacamp.com",
  email: "info@yajacamp.com",
  description: "대한민국 No.1 숏폼 드라마 스튜디오",
  tagline: "고객님의 성장을 이끄는 최적의 파트너로",
} as const;

/** Hero section primary copy. */
export const hero = {
  eyebrow: "K-Short Drama Studio",
  headline: ["대한민국 No.1", "숏폼 드라마 스튜디오"],
  subhead: "고객님의 성장을 이끄는 최적의 파트너로",
} as const;

/** Top-level KPI numbers shown beneath the hero. */
export const stats = [
  { label: "누적 조회수", value: "19억", numeric: 19, unit: "억" },
  { label: "총 팔로워", value: "183만", numeric: 183, unit: "만" },
  { label: "평균 조회수", value: "682만", numeric: 682, unit: "만" },
  { label: "100만+ 비율", value: "97%", numeric: 97, unit: "%" },
] as const;

/** Owned account showcase (자체 계정). */
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

/** Selected client work — branded contents & PPL. */
export const works = [
  {
    brand: "Vaseline",
    type: "Branded Contents",
    detail: "에피소드 2개",
    views: "12,342,129",
    handle: "@vaseline_korea",
  },
  {
    brand: "SAMSUNG",
    type: "드라마 PPL",
    detail: "에피소드 2개",
    views: "4,544,123",
    handle: "@yajacamp",
  },
  {
    brand: "Adobe",
    type: "드라마 PPL",
    detail: "에피소드 1개",
    views: "3,204,010",
    handle: "@ycn_videographer",
  },
  {
    brand: "PERSOL APAC",
    type: "계정육성",
    detail: "운영기간 1달",
    views: "3,150,124",
    handle: "@persolapacdramas",
  },
] as const;

/** Trusted-by client logos. */
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
  "통인시장",
] as const;

/** Awards. */
export const awards = [
  { title: "TikTok Awards 2024", category: "Video of the Year", year: 2024 },
] as const;

/** Founders. */
export const founders = [
  {
    name: "Yoojun Kang",
    role: "Co-founder & CEO",
    bio: "2022년 VTuber 에이전시 창업, IP 권리 인수. 2022년 일본 최대 숏폼드라마 스튜디오에 합류해 글로벌·로컬 시장에서 스튜디오를 성장시킨 경험을 쌓았습니다. 2024년 한국 최고의 크리에이터들과 YAJA Inc.를 설립.",
  },
  {
    name: "Lim Hyojun",
    role: "Co-founder & Chief Director",
    bio: "2019년 4KGOLD 프로덕션을 시작으로 뮤직비디오와 커머셜 영상을 제작해왔으며 2024년 YAJA를 설립하여 본격적으로 숏드라마 시장에 진출했습니다. YAJA의 공동 창업자이자 총괄 감독으로서 활약 중.",
  },
  {
    name: "Lee Daegeon",
    role: "Co-founder & Chief Director",
    bio: '"영찍남 YCN" 채널을 시작으로 숏폼콘텐츠와 숏드라마를 제작해왔으며 약 1년 만에 누적 조회수 8억 회를 달성, 2024 TikTok Awards 올해의 비디오상을 수상하였습니다. 2024년 YAJA를 설립하며 본격적으로 숏드라마 시장에 진출.',
  },
] as const;

/** Service offerings (DRAMA / BRANDED / PPL / ACCOUNT). */
export const services = [
  {
    title: "ACCOUNT",
    subtitle: "기획 + 제작 + 운영 + PPL",
    description:
      "브랜드 전용 숏폼 드라마 계정을 기획부터 운영까지 풀-스택으로 제공합니다.",
  },
  {
    title: "BRANDED CONTENTS",
    subtitle: "브랜디드 드라마 시리즈",
    description:
      "브랜드 메시지를 자연스럽게 녹여낸 시리즈 드라마로 1억 이상의 도달을 만듭니다.",
  },
  {
    title: "DRAMA PPL",
    subtitle: "에피소드 단위 PPL",
    description:
      "기존 인기 드라마에 제품을 자연스럽게 노출시키는 검증된 포맷입니다.",
  },
  {
    title: "ORIGINAL IP",
    subtitle: "오리지널 IP 제작",
    description:
      "YAJA POP / CAMP / YCN 등 자체 IP를 통한 직접 수익 모델을 운영합니다.",
  },
] as const;
