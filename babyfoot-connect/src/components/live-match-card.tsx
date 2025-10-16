import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import type { Match } from "@/lib/mock-data"
import { Clock } from "lucide-react"

interface LiveMatchCardProps {
  match: Match
}

export function LiveMatchCard({ match }: LiveMatchCardProps) {
  const getElapsedTime = (startTime: string) => {
    const elapsed = Math.floor((Date.now() - new Date(startTime).getTime()) / 60000)
    return `${elapsed} min`
  }

  return (
    <Card className="p-6 bg-card border-border">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            <Clock className="h-3 w-3 mr-1" />
            En cours
          </Badge>
          <span className="text-xs text-muted-foreground">{getElapsedTime(match.startTime)}</span>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={match.player1.avatar || "/placeholder.svg"} alt={match.player1.name} />
                <AvatarFallback>{match.player1.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="font-medium text-foreground">{match.player1.name}</span>
            </div>
            <span className="text-2xl font-bold text-foreground">{match.score1}</span>
          </div>

          <div className="flex items-center justify-center">
            <div className="h-px bg-border flex-1" />
            <span className="px-3 text-xs font-medium text-muted-foreground">VS</span>
            <div className="h-px bg-border flex-1" />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={match.player2.avatar || "/placeholder.svg"} alt={match.player2.name} />
                <AvatarFallback>{match.player2.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="font-medium text-foreground">{match.player2.name}</span>
            </div>
            <span className="text-2xl font-bold text-foreground">{match.score2}</span>
          </div>
        </div>

        <div className="pt-2 border-t border-border">
          <p className="text-xs text-muted-foreground">{match.babyfootName}</p>
        </div>
      </div>
    </Card>
  )
}
