import createChatHandler from './createChatHandler';
import {codePrompt, systemPrompt, updateDocumentPrompt} from '@/lib/ai/prompts';

export const {POST, DELETE, maxDuration} = createChatHandler({
  codePrompt,
  systemPrompt,
  updateDocumentPrompt,
});
