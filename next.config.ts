import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // output: 'export',
  images: {
    loader: 'custom',
  },
  transpilePackages: ['next-image-export-optimizer'],
  //ぼかし画像の生成。ないとブラウザに文句いわれる
  env: {
    nextImageExportOptimizer_generateAndUseBlurImages: 'true',
  },
};

export default nextConfig;
