"use client"

import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from "recharts"
import { Eye, Users, UserPlus, TrendingUp } from "lucide-react"

const creatorsData = [
  {
    name: "VANYA",
    handle: "@makeupbyvanyaarora",
    views: 2234332,
    reach: 1053488,
    reachGrowth: 65.3,
    follows: 455,
    color: "#f472b6",
  },
  {
    name: "Jai",
    handle: "@jai__kapoors.muaz",
    views: 1101235,
    reach: 109366,
    reachGrowth: 9.1,
    follows: 227,
    color: "#60a5fa",
  },
  {
    name: "Aarushi",
    handle: "@glamwithaarushi",
    views: 717196,
    reach: 345628,
    reachGrowth: 10.7,
    follows: 2076,
    color: "#a78bfa",
  },
  {
    name: "Reet",
    handle: "@makeoverby_reet",
    views: 1281339,
    reach: 408420,
    reachGrowth: 11.7,
    follows: 368,
    color: "#34d399",
  },
]

const viewsChartData = creatorsData.map((creator) => ({
  name: creator.name,
  views: creator.views,
  color: creator.color,
}))

const reachChartData = creatorsData.map((creator) => ({
  name: creator.name,
  reach: creator.reach,
  color: creator.color,
}))

const followsChartData = creatorsData.map((creator) => ({
  name: creator.name,
  follows: creator.follows,
  color: creator.color,
}))

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(2) + "M"
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K"
  }
  return num.toString()
}

export function PortfolioSection() {
  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold text-primary mb-2">CREATOR METRICS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Results that speak for themselves
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Real performance data from Instagram creators we have worked with
            </p>
          </div>
        </ScrollReveal>

        {/* Creator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {creatorsData.map((creator, index) => (
            <ScrollReveal key={creator.handle} delay={index * 100}>
              <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-bold" style={{ color: creator.color }}>
                    {creator.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{creator.handle}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-pink-100">
                      <Eye className="w-4 h-4 text-pink-500" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Views</p>
                      <p className="text-lg font-bold text-foreground">{formatNumber(creator.views)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100">
                      <Users className="w-4 h-4 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Reach</p>
                      <p className="text-lg font-bold text-foreground">{formatNumber(creator.reach)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Growth</p>
                      <p className="text-lg font-bold text-green-600">+{creator.reachGrowth}%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100">
                      <UserPlus className="w-4 h-4 text-purple-500" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">New Follows</p>
                      <p className="text-lg font-bold text-foreground">{formatNumber(creator.follows)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Views Chart */}
          <ScrollReveal delay={100}>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-foreground flex items-center gap-2">
                  <Eye className="w-5 h-5 text-pink-500" />
                  Total Views
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={viewsChartData} layout="vertical" margin={{ left: 10, right: 20 }}>
                      <XAxis type="number" tickFormatter={(value) => formatNumber(value)} fontSize={12} />
                      <YAxis type="category" dataKey="name" fontSize={12} width={60} />
                      <Tooltip
                        formatter={(value: number) => [formatNumber(value), "Views"]}
                        contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: "8px" }}
                      />
                      <Bar dataKey="views" radius={[0, 4, 4, 0]}>
                        {viewsChartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Reach Chart */}
          <ScrollReveal delay={200}>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-foreground flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-500" />
                  Total Reach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={reachChartData} layout="vertical" margin={{ left: 10, right: 20 }}>
                      <XAxis type="number" tickFormatter={(value) => formatNumber(value)} fontSize={12} />
                      <YAxis type="category" dataKey="name" fontSize={12} width={60} />
                      <Tooltip
                        formatter={(value: number) => [formatNumber(value), "Reach"]}
                        contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: "8px" }}
                      />
                      <Bar dataKey="reach" radius={[0, 4, 4, 0]}>
                        {reachChartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Follows Chart */}
          <ScrollReveal delay={300}>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-foreground flex items-center gap-2">
                  <UserPlus className="w-5 h-5 text-purple-500" />
                  New Followers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={followsChartData} layout="vertical" margin={{ left: 10, right: 20 }}>
                      <XAxis type="number" tickFormatter={(value) => formatNumber(value)} fontSize={12} />
                      <YAxis type="category" dataKey="name" fontSize={12} width={60} />
                      <Tooltip
                        formatter={(value: number) => [formatNumber(value), "Follows"]}
                        contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: "8px" }}
                      />
                      <Bar dataKey="follows" radius={[0, 4, 4, 0]}>
                        {followsChartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
