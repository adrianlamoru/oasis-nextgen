export interface Message {
    text: string;
    actionText: string;
    actionUrl: string;
    read?: boolean;
    type: string;
}
