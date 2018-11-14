import * as lodash from 'lodash';

// Module Augmentation

declare module 'lodash' {
    interface LoDashStatic {
        log(item: string): void
    }
}