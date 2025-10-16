export interface Player {
  id: string
  name: string
  avatar: string
  wins: number
  totalGames: number
  goalsScored: number
}

export interface Babyfoot {
  id: string
  name: string
  location: string
  status: "available" | "occupied" | "maintenance"
}

export interface Match {
  id: string
  babyfootId: string
  babyfootName: string
  player1: Player
  player2: Player
  score1: number
  score2: number
  startTime: string
  status: "in-progress" | "finished"
}

export interface Stats {
  totalMatches: number
  activePlayers: number
  availableTables: number
  matchesThisWeek: number
}

export const mockPlayers: Player[] = [
  {
    id: "1",
    name: "Alexandre M.",
    avatar: "/student-avatar.png",
    wins: 45,
    totalGames: 67,
    goalsScored: 234,
  },
  {
    id: "2",
    name: "Sophie L.",
    avatar: "/student-avatar.png",
    wins: 42,
    totalGames: 58,
    goalsScored: 198,
  },
  {
    id: "3",
    name: "Thomas D.",
    avatar: "/student-avatar.png",
    wins: 38,
    totalGames: 52,
    goalsScored: 176,
  },
  {
    id: "4",
    name: "Marie K.",
    avatar: "/student-avatar.png",
    wins: 35,
    totalGames: 49,
    goalsScored: 165,
  },
  {
    id: "5",
    name: "Lucas B.",
    avatar: "/student-avatar.png",
    wins: 32,
    totalGames: 45,
    goalsScored: 152,
  },
]

export const mockBabyfoots: Babyfoot[] = [
  {
    id: "1",
    name: "Table Ynov #1",
    location: "Hall Principal",
    status: "occupied",
  },
  {
    id: "2",
    name: "Table Ynov #2",
    location: "Cafétéria",
    status: "available",
  },
  {
    id: "3",
    name: "Table Ynov #3",
    location: "Espace Détente",
    status: "available",
  },
  {
    id: "4",
    name: "Table Ynov #4",
    location: "Hall Principal",
    status: "maintenance",
  },
]

export const mockMatches: Match[] = [
  {
    id: "1",
    babyfootId: "1",
    babyfootName: "Table Ynov #1",
    player1: mockPlayers[0],
    player2: mockPlayers[1],
    score1: 7,
    score2: 5,
    startTime: new Date(Date.now() - 15 * 60000).toISOString(), 
    status: "in-progress",
  },
  {
    id: "2",
    babyfootId: "3",
    babyfootName: "Table Ynov #3",
    player1: mockPlayers[2],
    player2: mockPlayers[3],
    score1: 3,
    score2: 3,
    startTime: new Date(Date.now() - 8 * 60000).toISOString(), 
    status: "in-progress",
  },
]

export const mockStats: Stats = {
  totalMatches: 1247,
  activePlayers: 156,
  availableTables: mockBabyfoots.filter((b) => b.status === "available").length,
  matchesThisWeek: 89,
}
