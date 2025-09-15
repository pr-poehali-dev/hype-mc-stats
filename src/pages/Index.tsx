import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

export default function Index() {
  const topPlayers = [
    { rank: 1, name: "IMMORTAL_Mellianse", kills: 2847, deaths: 1203, kd: 2.37, level: 89, clan: "IMMORTAL" },
    { rank: 2, name: "PvP_Master", kills: 2634, deaths: 1156, kd: 2.28, level: 84, clan: "LEGENDS" },
    { rank: 3, name: "ShadowWarrior", kills: 2429, deaths: 1087, kd: 2.23, level: 81, clan: "SHADOWS" },
    { rank: 4, name: "CraftKiller", kills: 2284, deaths: 1024, kd: 2.23, level: 78, clan: "CRAFT" },
    { rank: 5, name: "MineBeast", kills: 2156, deaths: 987, kd: 2.18, level: 75, clan: "BEASTS" }
  ];

  const serverStats = {
    online: 1847,
    maxOnline: 2000,
    totalPlayers: 45672,
    totalKills: 892456,
    totalClans: 234
  };

  const topClans = [
    { name: "IMMORTAL", members: 89, wins: 456, rating: 2847 },
    { name: "LEGENDS", members: 76, wins: 423, rating: 2634 },
    { name: "SHADOWS", members: 82, wins: 398, rating: 2429 },
    { name: "CRAFT", members: 91, wins: 367, rating: 2284 }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-green-400">⛏️ HypeMC Stats</div>
              <Badge variant="secondary" className="bg-green-400/20 text-green-400 border-green-400">
                ОНЛАЙН: {serverStats.online}/{serverStats.maxOnline}
              </Badge>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Button variant="ghost" className="text-white hover:text-green-400">
                <Icon name="Trophy" className="mr-2 h-4 w-4" />
                Топы
              </Button>
              <Button variant="ghost" className="text-white hover:text-green-400">
                <Icon name="BarChart3" className="mr-2 h-4 w-4" />
                Статистика
              </Button>
              <Button variant="ghost" className="text-white hover:text-green-400">
                <Icon name="Users" className="mr-2 h-4 w-4" />
                Игроки
              </Button>
              <Button variant="ghost" className="text-white hover:text-green-400">
                <Icon name="Crown" className="mr-2 h-4 w-4" />
                Кланы
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Server Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-green-500/20 to-green-500/5 border-green-500/30">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Онлайн игроков</CardTitle>
              <Icon name="Users" className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-400">{serverStats.online}</div>
              <Progress value={92.35} className="mt-2 h-2" />
              <p className="text-xs text-gray-400 mt-1">
                Максимум: {serverStats.maxOnline}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 border-yellow-500/30">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Всего игроков</CardTitle>
              <Icon name="UserCheck" className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-400">{serverStats.totalPlayers.toLocaleString()}</div>
              <p className="text-xs text-gray-400 mt-2">
                Зарегистрировано на сервере
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-500/20 to-red-500/5 border-red-500/30">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">PvP Убийства</CardTitle>
              <Icon name="Sword" className="h-4 w-4 text-red-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-400">{serverStats.totalKills.toLocaleString()}</div>
              <p className="text-xs text-gray-400 mt-2">
                Всего за всё время
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-600/20 to-orange-600/5 border-orange-600/30">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Активных кланов</CardTitle>
              <Icon name="Shield" className="h-4 w-4 text-orange-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-400">{serverStats.totalClans}</div>
              <p className="text-xs text-gray-400 mt-2">
                В рейтинговых боях
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Top Players Leaderboard */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-900/50 border-gray-800 h-fit">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Icon name="Trophy" className="mr-2 h-5 w-5 text-yellow-400" />
                  Топ PvP Игроков
                </CardTitle>
                <CardDescription className="text-gray-400">Лучшие бойцы сервера HypeMC</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPlayers.map((player) => (
                    <div
                      key={player.rank}
                      className="flex items-center justify-between p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-400/20">
                          <span className="text-sm font-bold text-green-400">#{player.rank}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded overflow-hidden border-2 border-green-400/30">
                            <img 
                              src="/img/fbe8411e-107a-43d6-aa73-4f685cdce3d9.jpg" 
                              alt="Player Avatar" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-semibold text-white group-hover:text-green-400 transition-colors">
                              {player.name}
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-gray-400">
                              <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                                {player.clan}
                              </Badge>
                              <span>Lvl {player.level}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6 text-sm">
                        <div className="text-center">
                          <div className="text-green-400 font-semibold">{player.kills}</div>
                          <div className="text-gray-400">Убийств</div>
                        </div>
                        <div className="text-center">
                          <div className="text-red-400 font-semibold">{player.deaths}</div>
                          <div className="text-gray-400">Смертей</div>
                        </div>
                        <div className="text-center">
                          <div className="text-yellow-400 font-bold">{player.kd}</div>
                          <div className="text-gray-400">K/D</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6 bg-green-400 hover:bg-green-500 text-black" variant="outline">
                  <Icon name="ChevronDown" className="mr-2 h-4 w-4" />
                  Показать больше игроков
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Top Clans */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Icon name="Crown" className="mr-2 h-5 w-5 text-yellow-400" />
                  Топ Кланов
                </CardTitle>
                <CardDescription className="text-gray-400">Сильнейшие кланы</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topClans.map((clan, index) => (
                    <div
                      key={clan.name}
                      className="flex items-center justify-between p-3 rounded-lg bg-gray-800/20 hover:bg-gray-800/40 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-600/20">
                          <span className="text-xs font-bold text-orange-400">#{index + 1}</span>
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-white">{clan.name}</div>
                          <div className="text-xs text-gray-400">{clan.members} участников</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-yellow-400">{clan.rating}</div>
                        <div className="text-xs text-gray-400">{clan.wins} побед</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Icon name="Activity" className="mr-2 h-5 w-5 text-green-400" />
                  Активность
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Боёв сегодня</span>
                    <span className="font-semibold text-green-400">1,247</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Новых игроков</span>
                    <span className="font-semibold text-yellow-400">89</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Денег в экономике</span>
                    <span className="font-semibold text-yellow-400">₽2,847,294</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Событий активно</span>
                    <span className="font-semibold text-orange-400">3</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Server Status */}
            <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/30">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Icon name="Server" className="mr-2 h-5 w-5 text-green-400" />
                  Статус Сервера
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-green-400/20 text-green-400 border-green-400">
                    🟢 ONLINE
                  </Badge>
                  <span className="text-sm text-gray-400">Uptime: 99.8%</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">TPS:</span>
                    <span className="font-semibold text-green-400">19.8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">RAM:</span>
                    <span className="font-semibold text-white">12.4GB / 32GB</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Achievements */}
        <Card className="mt-8 bg-gray-900/50 border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center text-white">
              <Icon name="Award" className="mr-2 h-5 w-5 text-yellow-400" />
              Последние Достижения
            </CardTitle>
            <CardDescription className="text-gray-400">Свежие рекорды и победы игроков</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-lg bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 border border-yellow-500/30">
                <div className="flex items-center space-x-3">
                  <Icon name="Target" className="h-8 w-8 text-yellow-400" />
                  <div>
                    <div className="font-semibold text-white">IMMORTAL_Mellianse</div>
                    <div className="text-sm text-gray-400">Убил 100 игроков подряд!</div>
                    <div className="text-xs text-yellow-400 mt-1">2 часа назад</div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/30">
                <div className="flex items-center space-x-3">
                  <Icon name="Coins" className="h-8 w-8 text-green-400" />
                  <div>
                    <div className="font-semibold text-white">RichMiner</div>
                    <div className="text-sm text-gray-400">Заработал ₽1,000,000</div>
                    <div className="text-xs text-green-400 mt-1">5 часов назад</div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-gradient-to-br from-orange-600/20 to-orange-600/5 border border-orange-600/30">
                <div className="flex items-center space-x-3">
                  <Icon name="Shield" className="h-8 w-8 text-orange-400" />
                  <div>
                    <div className="font-semibold text-white">Клан LEGENDS</div>
                    <div className="text-sm text-gray-400">Выиграл войну кланов</div>
                    <div className="text-xs text-orange-400 mt-1">1 день назад</div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-gradient-to-br from-red-500/20 to-red-500/5 border border-red-500/30">
                <div className="flex items-center space-x-3">
                  <Icon name="Flame" className="h-8 w-8 text-red-400" />
                  <div>
                    <div className="font-semibold text-white">PvP_Master</div>
                    <div className="text-sm text-gray-400">Поджёг 50 домов</div>
                    <div className="text-xs text-red-400 mt-1">3 дня назад</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900/30 mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400">
              © 2024 HypeMC. Лучший сервер Minecraft в СНГ
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
                Discord
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Icon name="Send" className="mr-2 h-4 w-4" />
                Telegram
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Icon name="Youtube" className="mr-2 h-4 w-4" />
                YouTube
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}