This repository contains the source code for my personal website: [https://pedroduarte.tech/](https://pedroduarte.tech/). It is a monorepo with a single app (for now) that is a Next.js app. Turborepo is used to manage the monorepo. The app is hosted on AWS Amplify.

Feel free to fork this repository and use it as a template for your own website. If you do, please consider starring this repository. The content can be easily changed by editing specific files, as described below.

# Requirements

- Node.js (20+) or Docker
- Yarn (if not using Docker)
- AWS account (optional)

# Getting Started

## Development

1. After cloning the repository, run `yarn install` to install the dependencies (you can skip this step if you are using Docker).
2. Run `yarn dev` or `yarn dev:docker` to start the development server. The app will be available at [http://localhost:3000](http://localhost:3000). Hot reloading is enabled.

## Deployment (AWS Amplify)

1. Create an AWS account if you don't have one.
2. Go to the AWS Amplify console and create a new app.
3. Connect the app to your Git repository.
4. Select your repository and mark the option "My app is a monorepo".
5. On the next page, the `amplify.yml` file located in the root of the repository will be automatically detected.
6. Build settings:
   - Build command: `yarn build`
   - Output directory: `.next`
7. On Advanced setttings:
   - **Environment variables**: Add the following environment variables:
     - `ENV`: `production` or other environment you want to use.
     - `NODE_ENV`: `production`
     - `NEXT_PUBLIC_GTM_ID`: (Optional) Your Google Tag Manager ID.
   - **Live package updates**: Override the Node.js version to 20+.
8. Review and deploy. Every commit to the main branch will trigger a new deployment.

# Customization

The content of the website can be easily changed by editing the following files:

- `apps\site\src\contexts\ContentContext.tsx`: This file contains the text content of the website. The content is stored in a context to be easily accessible by all components. The content is divided into sections, and each section contains a title and a list of paragraphs. The paragraphs can contain text, links, and images.
- `public/images`: This folder contains the images used in the website. You can replace the images with your own.
- `public/pdf/resume.pdf`: This is the PDF file of my resume. You can replace it with your own.
