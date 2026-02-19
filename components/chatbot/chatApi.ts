const API_BASE_URL = 'https://ai.neovis.co.in/jb_chatbot';

export interface ChatMessage {
    session_id: string;
    message: string;
    timestamp: string;
}

export interface PageContext {
    session_id: string;
    page: string;
    url: string;
    metadata: Record<string, any>;
}

export interface ChatResponse {
    response: string;
    suggestions: string[];
    tool_actions: any[];
}

export interface SessionResponse {
    session_id: string;
    created_at: string;
}

export interface ContextResponse {
    session_id: string;
    page: string;
    suggestions: string[];
    timestamp: string;
}

// Create a new chat session
export async function createSession(): Promise<SessionResponse> {
    const response = await fetch(`${API_BASE_URL}/api/session/create`, {
        method: 'POST',
    });
    
    if (!response.ok) {
        throw new Error('Failed to create session');
    }
    
    return response.json();
}

// Update page context
export async function updateContext(context: PageContext): Promise<ContextResponse> {
    const response = await fetch(`${API_BASE_URL}/api/chat/context`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(context),
    });
    
    if (!response.ok) {
        throw new Error('Failed to update context');
    }
    
    return response.json();
}

// Send chat message (non-streaming)
export async function sendMessage(message: ChatMessage): Promise<ChatResponse> {
    const response = await fetch(`${API_BASE_URL}/api/chat/message`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
    });
    
    if (!response.ok) {
        throw new Error('Failed to send message');
    }
    
    return response.json();
}

// Send chat message (streaming)
export async function sendMessageStream(message: ChatMessage): Promise<Response> {
    const response = await fetch(`${API_BASE_URL}/api/chat/stream`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
    });
    
    if (!response.ok) {
        throw new Error('Failed to send message');
    }
    
    return response;
}

// Get conversation history
export async function getHistory(sessionId: string): Promise<any> {
    const response = await fetch(`${API_BASE_URL}/api/session/${sessionId}/history`, {
        method: 'GET',
    });
    
    if (!response.ok) {
        throw new Error('Failed to get history');
    }
    
    return response.json();
}

// Clear session
export async function clearSession(sessionId: string): Promise<any> {
    const response = await fetch(`${API_BASE_URL}/api/session/${sessionId}`, {
        method: 'DELETE',
    });
    
    if (!response.ok) {
        throw new Error('Failed to clear session');
    }
    
    return response.json();
}

// Get suggestions
export async function getSuggestions(sessionId: string): Promise<any> {
    const response = await fetch(`${API_BASE_URL}/api/suggestions/${sessionId}`, {
        method: 'GET',
    });
    
    if (!response.ok) {
        throw new Error('Failed to get suggestions');
    }
    
    return response.json();
}
