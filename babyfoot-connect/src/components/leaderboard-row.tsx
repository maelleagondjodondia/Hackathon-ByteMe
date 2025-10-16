import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Player } from "@/lib/mock-data"
import { Trophy } from "lucide-react"

interface LeaderboardRowProps {
  player: Player
  rank: number
}

export function LeaderboardRow({ player, rank }: LeaderboardRowProps) {
  const winRate = Math.round((player.wins / player.totalGames) * 100)

  return (
    <div className="flex items-center justify-between p-4 rounded-lg hover:bg-accent/50 transition-colors">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8">
          {rank === 1 ? (
            <Trophy className="h-5 w-5 text-yellow-500" />
          ) : (
            <span className="text-lg font-bold text-muted-foreground">#{rank}</span>
          )}
        </div>
        <Avatar className="h-12 w-12">
          <AvatarImage src={player.avatar || "/placeholder.svg"} alt={player.name} />
          <AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-foreground">{player.name}</p>
          <p className="text-sm text-muted-foreground">
            {player.wins} victoires • {player.totalGames} matchs
          </p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-lg font-bold text-primary">{winRate}%</p>
        <p className="text-xs text-muted-foreground">Taux de victoire</p>
      </div>
    </div>
  )
}
