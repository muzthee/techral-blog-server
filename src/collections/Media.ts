import { CollectionConfig } from 'payload/types';
import path from 'path';

const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload: {
    adminThumbnail: 'thumbnail',
    staticDir: path.resolve(__dirname, '../../public/media'),
    mimeTypes: [
      'image/jpeg',
      'image/png',
      'image/svg+xml',
      'image/webp',
      'image/gif',
    ],
    imageSizes: [
      {
        name: 'thumbnail',
        width: 320,
        height: 320,
      },
      // {
      //     name: 'medium',
      //     width: 640,
      //     height: 640,
      // },
      // {
      //     name: 'large',
      //     width: 1280,
      //     height: 1280,
      // },
      // {
      //     name: 'hero',
      //     width: 1920,
      //     height: 1080,
      // },
      // {
      //     name: 'portrait',
      //     width: 768,
      //     height: 1024
      // }
    ],
  },
  fields: [
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
      localized: true,
      required: true,
    },
  ],
};

export default Media;
