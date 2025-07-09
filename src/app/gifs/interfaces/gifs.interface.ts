export interface GifImageFormat {
  height: string;
  width: string;
  size?: string;
  url: string;
  mp4_size?: string;
  mp4?: string;
  webp_size?: string;
  webp?: string;
}

export interface GifImages {
  original: GifImageFormat & { frames?: string; hash?: string };
  downsized: GifImageFormat;
  downsized_large: GifImageFormat;
  downsized_medium: GifImageFormat;
  downsized_small?: GifImageFormat;
  downsized_still?: GifImageFormat;
  fixed_height: GifImageFormat;
  fixed_height_downsampled?: GifImageFormat;
  fixed_height_small?: GifImageFormat;
  fixed_height_small_still?: GifImageFormat;
  fixed_height_still?: GifImageFormat;
  fixed_width: GifImageFormat;
  fixed_width_downsampled?: GifImageFormat;
  fixed_width_small?: GifImageFormat;
  fixed_width_small_still?: GifImageFormat;
  fixed_width_still?: GifImageFormat;
  looping?: { mp4_size: string; mp4: string };
  original_still?: GifImageFormat;
  original_mp4?: GifImageFormat;
  preview?: GifImageFormat;
  preview_gif?: GifImageFormat;
  preview_webp?: GifImageFormat;
  '480w_still'?: GifImageFormat;
}

export interface GifAnalyticsEvent {
  url: string;
}

export interface GifAnalytics {
  onload: GifAnalyticsEvent;
  onclick: GifAnalyticsEvent;
  onsent: GifAnalyticsEvent;
}

export interface GifUser {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
  description: string;
  instagram_url: string;
  website_url: string;
  is_verified: boolean;
}

export interface GifObject {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  images: GifImages;
  analytics_response_payload: string;
  analytics: GifAnalytics;
  alt_text?: string;
  user?: GifUser;
}

export interface GifMeta {
  status: number;
  msg: string;
  response_id: string;
}
export interface GifPagination {
  total_count: number;
  count: number;
  offset: number;
}

export interface GiphyResponse {
  data: GifObject[];
  meta: GifMeta;
  pagination: GifPagination;
}
