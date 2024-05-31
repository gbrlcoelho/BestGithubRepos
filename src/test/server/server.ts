import {setupServer} from 'msw/node';

import {repositoryHandlers} from './Repository/repositoryHandlers';

export const server = setupServer(...repositoryHandlers);

export {resetInMemoryResponse} from './Repository/repositoryHandlers';

export {mockedData} from './Repository/mocks';
