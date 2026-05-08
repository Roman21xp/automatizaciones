import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

createChat({
	webhookUrl: 'https://vps-86c1c2aa.vps.ovh.net/webhook/75f2ea6d-1b5d-4ca8-961a-a5f69742aa66/chat',
	webhookConfig: {
		method: 'POST',
		headers: {}
	},
	target: '#n8n-chat',
	mode: 'window',
	chatInputKey: 'chatInput',
	chatSessionKey: 'sessionId',
	loadPreviousSession: true,
	metadata: {},
	showWelcomeScreen: false,
	defaultLanguage: 'en',
	initialMessages: [
		'Hi there! 👋',
		'My name is Nathan. How can I assist you today?'
	],
	i18n: {
		en: {
			title: 'Hi there! 👋',
			subtitle: "Start a chat. We're here to help you 24/7.",
			footer: '',
			getStarted: 'New Conversation',
			inputPlaceholder: 'Type your question..',
		},
	},
	enableStreaming: false,
});