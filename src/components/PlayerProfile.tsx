import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

interface PlayerProfileProps {
  playerName: string;
  onBack: () => void;
}

export function PlayerProfile({ playerName, onBack }: PlayerProfileProps) {
  const playerData = {
    name: "IMMORTAL_Mellianse",
    rank: 1,
    level: 89,
    xp: 847290,
    xpToNext: 1000000,
    clan: "IMMORTAL",
    clanRole: "Лидер",
    joinDate: "15 марта 2023",
    lastSeen: "2 минуты назад",
    status: "online",
    
    // PvP Stats
    pvp: {
      kills: 2847,
      deaths: 1203,
      kd: 2.37,
      assists: 892,
      wins: 1847,
      losses: 456,
      winRate: 80.2,
      streak: 45,
      bestStreak: 127,
      damageDealt: 4792847,
      damageReceived: 2018394
    },

    // Economy Stats  
    economy: {
      balance: 2847294,
      totalEarned: 8472946,
      totalSpent: 5625652,
      shopPurchases: 2847,
      tradesMade: 456,
      highestBalance: 3492847
    },

    // Game Stats
    gameStats: {
      playTime: "847 часов",
      blocksDestroyed: 284729,
      blocksPlaced: 192847,
      itemsCrafted: 47293,
      mobsKilled: 18294,
      distance: "2847 км",
      jumps: 284729,
      deaths: 127
    },

    achievements: [
      { id: 1, name: "Первая кровь", description: "Убейте первого игрока", icon: "Sword", unlocked: true, date: "15 марта 2023" },
      { id: 2, name: "Убийца", description: "Убейте 100 игроков", icon: "Target", unlocked: true, date: "20 марта 2023" },
      { id: 3, name: "Резня", description: "Убейте 1000 игроков", icon: "Skull", unlocked: true, date: "15 апреля 2023" },
      { id: 4, name: "Миллионер", description: "Заработайте 1,000,000₽", icon: "Coins", unlocked: true, date: "2 мая 2023" },
      { id: 5, name: "Лидер клана", description: "Станьте лидером клана", icon: "Crown", unlocked: true, date: "10 мая 2023" },
      { id: 6, name: "Бессмертный", description: "Убейте 100 игроков подряд", icon: "Shield", unlocked: true, date: "1 сентября 2024" },
      { id: 7, name: "Легенда", description: "Достигните 1 места в рейтинге", icon: "Trophy", unlocked: true, date: "15 сентября 2024" },
      { id: 8, name: "Мастер войны", description: "Выиграйте 50 войн кланов", icon: "Swords", unlocked: false, progress: 47 }
    ],

    recentMatches: [
      { id: 1, mode: "PvP Арена", result: "Победа", kills: 7, deaths: 2, time: "5 минут назад", map: "Desert Temple" },
      { id: 2, mode: "Клановая война", result: "Победа", kills: 12, deaths: 1, time: "2 часа назад", map: "Volcano" },
      { id: 3, mode: "PvP Арена", result: "Победа", kills: 5, deaths: 3, time: "3 часа назад", map: "Ice Castle" },
      { id: 4, mode: "PvP Дуэль", result: "Победа", kills: 3, deaths: 0, time: "5 часов назад", map: "Stone Platform" },
      { id: 5, mode: "PvP Арена", result: "Поражение", kills: 4, deaths: 6, time: "1 день назад", map: "Forest Maze" }
    ],

    inventory: [
      { name: "Алмазный меч", enchants: ["Острота V", "Небесная кара II"], rarity: "legendary" },
      { name: "Алмазная кираска", enchants: ["Защита IV", "Неразрушимость III"], rarity: "epic" },
      { name: "Зелье силы", count: 64, rarity: "rare" },
      { name: "Золотые яблоки", count: 32, rarity: "rare" },
      { name: "Эндер жемчуг", count: 16, rarity: "uncommon" }
    ]
  };

  const xpProgress = (playerData.xp / playerData.xpToNext) * 100;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={onBack} className="text-white hover:text-green-400">
              <Icon name="ArrowLeft" className="mr-2 h-4 w-4" />
              Назад
            </Button>
            <div className="text-2xl font-bold text-green-400">
              Профиль игрока
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Player Header */}
        <Card className="bg-gradient-to-r from-gray-900/80 to-gray-800/50 border-gray-700 mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="relative">
                <div className="w-32 h-32 rounded-lg overflow-hidden border-4 border-green-400/50">
                  <img 
                    src="/img/fbe8411e-107a-43d6-aa73-4f685cdce3d9.jpg" 
                    alt="Player Avatar" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -right-2">
                  <Badge variant="secondary" className={`${playerData.status === 'online' ? 'bg-green-400/20 text-green-400 border-green-400' : 'bg-gray-600/20 text-gray-400 border-gray-600'}`}>
                    {playerData.status === 'online' ? '🟢 Онлайн' : '🔴 Оффлайн'}
                  </Badge>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-4">
                  <h1 className="text-4xl font-bold text-white">{playerData.name}</h1>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2 md:mt-0">
                    <Badge variant="secondary" className="bg-green-400/20 text-green-400 border-green-400">
                      #{playerData.rank} в рейтинге
                    </Badge>
                    <Badge variant="outline" className="border-orange-400 text-orange-400">
                      Клан {playerData.clan}
                    </Badge>
                    <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                      {playerData.clanRole}
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{playerData.level}</div>
                    <div className="text-sm text-gray-400">Уровень</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">{playerData.pvp.kd}</div>
                    <div className="text-sm text-gray-400">K/D</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-400">{playerData.pvp.kills}</div>
                    <div className="text-sm text-gray-400">Убийств</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-400">{playerData.pvp.winRate}%</div>
                    <div className="text-sm text-gray-400">Побед</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Опыт до {playerData.level + 1} уровня</span>
                    <span className="text-white">{playerData.xp.toLocaleString()} / {playerData.xpToNext.toLocaleString()}</span>
                  </div>
                  <Progress value={xpProgress} className="h-3" />
                </div>

                <div className="flex justify-center md:justify-start space-x-6 text-sm text-gray-400">
                  <div>Присоединился: {playerData.joinDate}</div>
                  <div>Последний вход: {playerData.lastSeen}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Stats Tabs */}
        <Tabs defaultValue="pvp" className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-gray-900/50 border border-gray-800">
            <TabsTrigger value="pvp" className="data-[state=active]:bg-green-400/20 data-[state=active]:text-green-400">
              <Icon name="Sword" className="mr-2 h-4 w-4" />
              PvP
            </TabsTrigger>
            <TabsTrigger value="economy" className="data-[state=active]:bg-yellow-400/20 data-[state=active]:text-yellow-400">
              <Icon name="Coins" className="mr-2 h-4 w-4" />
              Экономика
            </TabsTrigger>
            <TabsTrigger value="achievements" className="data-[state=active]:bg-orange-400/20 data-[state=active]:text-orange-400">
              <Icon name="Award" className="mr-2 h-4 w-4" />
              Достижения
            </TabsTrigger>
            <TabsTrigger value="matches" className="data-[state=active]:bg-blue-400/20 data-[state=active]:text-blue-400">
              <Icon name="History" className="mr-2 h-4 w-4" />
              Матчи
            </TabsTrigger>
            <TabsTrigger value="general" className="data-[state=active]:bg-purple-400/20 data-[state=active]:text-purple-400">
              <Icon name="Activity" className="mr-2 h-4 w-4" />
              Общая
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pvp" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Icon name="Target" className="mr-2 h-5 w-5 text-red-400" />
                    Боевая статистика
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Убийства:</span>
                    <span className="text-green-400 font-semibold">{playerData.pvp.kills}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Смерти:</span>
                    <span className="text-red-400 font-semibold">{playerData.pvp.deaths}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Помощь:</span>
                    <span className="text-blue-400 font-semibold">{playerData.pvp.assists}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">K/D:</span>
                    <span className="text-yellow-400 font-bold">{playerData.pvp.kd}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Icon name="Trophy" className="mr-2 h-5 w-5 text-yellow-400" />
                    Победы и поражения
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Победы:</span>
                    <span className="text-green-400 font-semibold">{playerData.pvp.wins}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Поражения:</span>
                    <span className="text-red-400 font-semibold">{playerData.pvp.losses}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Процент побед:</span>
                    <span className="text-yellow-400 font-bold">{playerData.pvp.winRate}%</span>
                  </div>
                  <Progress value={playerData.pvp.winRate} className="h-2" />
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Icon name="Flame" className="mr-2 h-5 w-5 text-orange-400" />
                    Серии убийств
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Текущая серия:</span>
                    <span className="text-orange-400 font-semibold">{playerData.pvp.streak}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Лучшая серия:</span>
                    <span className="text-yellow-400 font-bold">{playerData.pvp.bestStreak}</span>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg border border-orange-500/30">
                    <div className="text-2xl font-bold text-orange-400 mb-1">{playerData.pvp.streak}</div>
                    <div className="text-sm text-gray-300">убийств подряд</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="economy" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Icon name="Wallet" className="mr-2 h-5 w-5 text-green-400" />
                    Баланс и доходы
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Текущий баланс:</span>
                    <span className="text-green-400 font-bold">₽{playerData.economy.balance.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Всего заработано:</span>
                    <span className="text-yellow-400 font-semibold">₽{playerData.economy.totalEarned.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Всего потрачено:</span>
                    <span className="text-red-400 font-semibold">₽{playerData.economy.totalSpent.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Максимальный баланс:</span>
                    <span className="text-orange-400 font-semibold">₽{playerData.economy.highestBalance.toLocaleString()}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Icon name="ShoppingCart" className="mr-2 h-5 w-5 text-blue-400" />
                    Торговля
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Покупок в магазине:</span>
                    <span className="text-blue-400 font-semibold">{playerData.economy.shopPurchases}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Сделок с игроками:</span>
                    <span className="text-purple-400 font-semibold">{playerData.economy.tradesMade}</span>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg border border-green-500/30">
                    <div className="text-2xl font-bold text-green-400 mb-1">₽{playerData.economy.balance.toLocaleString()}</div>
                    <div className="text-sm text-gray-300">доступно для покупок</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Icon name="Package" className="mr-2 h-5 w-5 text-purple-400" />
                    Инвентарь
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {playerData.inventory.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded bg-gray-800/30">
                      <div>
                        <div className={`font-semibold text-sm ${
                          item.rarity === 'legendary' ? 'text-orange-400' : 
                          item.rarity === 'epic' ? 'text-purple-400' :
                          item.rarity === 'rare' ? 'text-blue-400' : 'text-gray-300'
                        }`}>
                          {item.name}
                        </div>
                        {item.enchants && (
                          <div className="text-xs text-gray-400">
                            {item.enchants.join(', ')}
                          </div>
                        )}
                      </div>
                      {item.count && (
                        <Badge variant="outline" className="text-xs">
                          x{item.count}
                        </Badge>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {playerData.achievements.map((achievement) => (
                <Card 
                  key={achievement.id} 
                  className={`${
                    achievement.unlocked 
                      ? 'bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 border-yellow-500/30' 
                      : 'bg-gray-900/50 border-gray-700'
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <Icon 
                        name={achievement.icon as any} 
                        className={`h-8 w-8 ${achievement.unlocked ? 'text-yellow-400' : 'text-gray-600'}`} 
                      />
                      <div className="flex-1">
                        <div className={`font-semibold ${achievement.unlocked ? 'text-white' : 'text-gray-500'}`}>
                          {achievement.name}
                        </div>
                        <div className="text-sm text-gray-400 mb-2">
                          {achievement.description}
                        </div>
                        {achievement.unlocked ? (
                          <div className="text-xs text-yellow-400">
                            Получено: {achievement.date}
                          </div>
                        ) : achievement.progress !== undefined ? (
                          <div className="space-y-1">
                            <div className="text-xs text-gray-400">
                              Прогресс: {achievement.progress}/50
                            </div>
                            <Progress value={(achievement.progress / 50) * 100} className="h-1" />
                          </div>
                        ) : (
                          <div className="text-xs text-gray-500">Заблокировано</div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="matches" className="mt-6">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Icon name="History" className="mr-2 h-5 w-5 text-blue-400" />
                  История матчей
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Последние 5 игр
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {playerData.recentMatches.map((match) => (
                    <div 
                      key={match.id}
                      className="flex items-center justify-between p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <Badge 
                          variant={match.result === 'Победа' ? 'default' : 'destructive'}
                          className={match.result === 'Победа' ? 'bg-green-400/20 text-green-400 border-green-400' : ''}
                        >
                          {match.result}
                        </Badge>
                        <div>
                          <div className="font-semibold text-white">{match.mode}</div>
                          <div className="text-sm text-gray-400">{match.map}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6 text-sm">
                        <div className="text-center">
                          <div className="text-green-400 font-semibold">{match.kills}</div>
                          <div className="text-gray-400">Убийств</div>
                        </div>
                        <div className="text-center">
                          <div className="text-red-400 font-semibold">{match.deaths}</div>
                          <div className="text-gray-400">Смертей</div>
                        </div>
                        <div className="text-center">
                          <div className="text-gray-300 text-xs">{match.time}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6 bg-blue-400 hover:bg-blue-500 text-black">
                  <Icon name="ChevronDown" className="mr-2 h-4 w-4" />
                  Загрузить больше матчей
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="general" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Icon name="Clock" className="mr-2 h-5 w-5 text-blue-400" />
                    Время в игре
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Общее время:</span>
                    <span className="text-blue-400 font-bold">{playerData.gameStats.playTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Прыжков:</span>
                    <span className="text-green-400 font-semibold">{playerData.gameStats.jumps.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Пройдено:</span>
                    <span className="text-yellow-400 font-semibold">{playerData.gameStats.distance}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Icon name="Pickaxe" className="mr-2 h-5 w-5 text-orange-400" />
                    Строительство
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Блоков сломано:</span>
                    <span className="text-red-400 font-semibold">{playerData.gameStats.blocksDestroyed.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Блоков поставлено:</span>
                    <span className="text-green-400 font-semibold">{playerData.gameStats.blocksPlaced.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Предметов создано:</span>
                    <span className="text-blue-400 font-semibold">{playerData.gameStats.itemsCrafted.toLocaleString()}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Icon name="Skull" className="mr-2 h-5 w-5 text-purple-400" />
                    Выживание
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Мобов убито:</span>
                    <span className="text-purple-400 font-semibold">{playerData.gameStats.mobsKilled.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Смертей от мобов:</span>
                    <span className="text-red-400 font-semibold">{playerData.gameStats.deaths}</span>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30">
                    <div className="text-2xl font-bold text-purple-400 mb-1">{Math.round(playerData.gameStats.mobsKilled / playerData.gameStats.deaths)}</div>
                    <div className="text-sm text-gray-300">мобов за смерть</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}