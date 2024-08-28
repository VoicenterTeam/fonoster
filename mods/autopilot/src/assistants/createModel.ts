/*
 * Copyright (C) 2024 by Fonoster Inc (https://fonoster.com)
 * http://github.com/fonoster/fonoster
 *
 * This file is part of Fonoster
 *
 * Licensed under the MIT License (the "License");
 * you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 *    https://opensource.org/licenses/MIT
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { VoiceResponse } from "@fonoster/voice";
import { ChatOpenAI } from "@langchain/openai";
import { makeHangupTool } from "./tools";
import { AssistantConfig } from "./types";

export function createModel(config: AssistantConfig, voice: VoiceResponse) {
  return new ChatOpenAI({
    model: config.model,
    apiKey: config.apiKey,
    maxTokens: config.maxTokens,
    temperature: config.temperature
  }).bindTools([makeHangupTool(voice)]);
}