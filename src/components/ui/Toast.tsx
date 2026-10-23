import { Check } from 'lucide-react'

export function Toast({ message }: { message: string }) {
  return <div className="toast" role="status"><Check size={16} />{message}</div>
}
