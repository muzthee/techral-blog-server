import path from 'path';
import cloudinaryPlugin from 'payload-cloudinary-plugin/dist/plugins';
import { payloadCloud } from '@payloadcms/plugin-cloud';
import { mongooseAdapter } from '@payloadcms/db-mongodb'; // database-adapter-import
import { webpackBundler } from '@payloadcms/bundler-webpack'; // bundler-import
import { slateEditor } from '@payloadcms/richtext-slate'; // editor-import
import { buildConfig } from 'payload/config';

import Users from './collections/Users';
import Media from './collections/Media';
import Post from './collections/Post';
import { Icon } from './graphics/icon';
import { Logo } from './graphics/logo';

export default buildConfig({
  admin: {
    meta: {
      favicon: '/assets/logo-white.svg',
      ogImage: '/assets/logo-white.svg',
    },
    user: Users.slug,
    bundler: webpackBundler(), // bundler-config
    components: {
      graphics: {
        Icon,
        Logo,
      },
    },
  },
  editor: slateEditor({}), // editor-config
  collections: [Users, Media, Post],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [cloudinaryPlugin() as any, payloadCloud()],
  // database-adapter-config-start
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  upload: {},

  // database-adapter-config-end
});
