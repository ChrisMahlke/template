import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';

export const config: Config = {
    plugins: [
        postcss({
            plugins: [autoprefixer()],
        }),
    ],
};
