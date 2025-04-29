import type { MenuItem } from '..'
import AILogo from '~/assets/imgs/ai/ai-logo.png'
import ChatGPTLogo from '~/assets/imgs/ai/chatgpt-logo.png'
import CherryStudioLogo from '~/assets/imgs/ai/cherry-studio-logo.png'
import MidjourneyLogo from '~/assets/imgs/ai/midjourney-logo.png'
import Modelscope from '~/assets/imgs/ai/modelscope-logo.png'

export default {
  title: 'AI',
  icon: AILogo,
  children: [
    {
      title: 'DeepSeek',
      logo: 'https://www.deepseek.com/favicon.ico',
      url: 'https://www.deepseek.com/',
      description: '深度求索（DeepSeek），成立于2023年，专注于研究世界领先的通用人工智能底层模型与技术，挑战人工智能前沿性难题。基于自研训练框架、自建智算集群和万卡算力等资源，深度求索团队仅用半年时间便已发布并开源多个百亿级参数大模型，如DeepSeek-LLM通用大语言模型、DeepSeek-Coder代码大模型，并在2024年1月率先开源国内首个MoE大模型（DeepSeek-MoE），各大模型在公开评测榜单及真实样本外的泛化效果均有超越同级别模型的出色表现。和 DeepSeek AI 对话，轻松接入 API。',
      tags: ['chat', 'ai', '人工智能', 'deepseek'],
    },
    {
      title: 'Kimi',
      logo: 'https://statics.moonshot.cn/kimi-chat/favicon.ico',
      url: 'https://kimi.moonshot.cn',
      description: 'Kimi 是一个有着超大“内存”的智能助手，可以一口气读完二十万字的小说，还会上网冲浪，快来跟他聊聊吧 | Kimi.ai - Moonshot AI 出品的智能助手',
      tags: ['chat', 'ai', '人工智能', 'chatgpt'],
    },
    {
      title: 'Midjourney',
      logo: MidjourneyLogo,
      url: 'https://midjourney.com',
      description: 'Midjourney 是一个基于人工智能的创意设计平台，它可以帮助你快速生成创意设计稿，让你的设计工作更加高效 | Midjourney.com',
      tags: ['chat', 'ai', '人工智能', 'chatgpt'],
    },
    {
      title: 'ChatGPT',
      logo: ChatGPTLogo,
      url: 'https://chat.openai.com',
      description: 'ChatGPT 是一个基于 OpenAI API 的聊天机器人，它可以帮助你快速生成代码，让你的工作更加高效 | ChatGPT - OpenAI',
      tags: ['chat', 'ai', '人工智能', 'chatgpt'],
    },
    {
      title: 'Hugging Face',
      logo: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg',
      url: 'https://huggingface.co',
      description: 'Hugging Face 是一个开源的人工智能平台，它可以帮助你快速生成代码，让你的工作更加高效 | Hugging Face',
      tags: ['chat', 'ai', '人工智能', 'chatgpt', '模型'],
    },
    {
      title: 'ModelScope 魔搭社区',
      logo: Modelscope,
      url: 'https://www.modelscope.cn/mcp',
      description: 'ModelScope——汇聚各领域先进的机器学习模型，提供模型探索体验、推理、训练、部署和应用的一站式服务。在这里，共建模型开源社区，发现、学习、定制和分享心仪的模型。',
      tags: ['ai', '人工智能', '社区', 'MCP', '模型'],
    },
    {
      title: 'Cherry Studio',
      logo: CherryStudioLogo,
      url: 'https://www.cherry-ai.com',
      description: 'Cherry Studio 是一款集多模型对话、知识库管理、AI 绘画、翻译等功能于一体的全能 AI 助手平台。',
      tags: ['chat', 'ai', '人工智能', '工具', '客户端', 'MCP客户端'],
    },
  ],
} as MenuItem
