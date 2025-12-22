import React from 'react'
import { Link } from 'react-router-dom'
import { Database, TrendingUp, Search, AlertCircle, Link as LinkIcon, FileText, Zap, BarChart3, CheckCircle } from 'lucide-react'

const SEOAnalytics = () => {
  const queries = [
    {
      id: 'A',
      name: 'High Impressions, Low CTR',
      description: 'Discover pages with high search visibility but poor click-through rates',
      icon: <TrendingUp className="w-5 h-5" />,
      impact: 'High',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'B',
      name: 'Keyword Cannibalization',
      description: 'Identify multiple pages competing for the same search queries',
      icon: <Search className="w-5 h-5" />,
      impact: 'High',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'C',
      name: 'Orphan Pages',
      description: 'Find valuable pages with no internal links',
      icon: <LinkIcon className="w-5 h-5" />,
      impact: 'Medium',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'D',
      name: 'Slow Pages',
      description: 'Detect pages with poor Core Web Vitals affecting rankings',
      icon: <Zap className="w-5 h-5" />,
      impact: 'High',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'E',
      name: '404s with Referrers',
      description: 'Track broken pages still receiving traffic',
      icon: <AlertCircle className="w-5 h-5" />,
      impact: 'Medium',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'F',
      name: 'Redirect Chains',
      description: 'Optimize redirect paths for better performance',
      icon: <LinkIcon className="w-5 h-5" />,
      impact: 'Medium',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'G',
      name: 'Content Gap Analysis',
      description: 'Identify missing content opportunities from competitors',
      icon: <FileText className="w-5 h-5" />,
      impact: 'High',
      color: 'from-green-500 to-teal-500'
    }
  ]

  const features = [
    {
      title: 'Search Console Integration',
      description: 'Direct integration with Google Search Console data',
      icon: <Search className="w-6 h-6" />
    },
    {
      title: 'Performance Metrics',
      description: 'Core Web Vitals and page speed analysis',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: 'Postgres Optimized',
      description: 'Scalable schema with materialized views and indexes',
      icon: <Database className="w-6 h-6" />
    },
    {
      title: 'SQL Playbook',
      description: 'Ready-to-use queries for common SEO opportunities',
      icon: <FileText className="w-6 h-6" />
    }
  ]

  const benefits = [
    'Surface hidden SEO opportunities in your existing traffic',
    'Identify and fix technical issues before they hurt rankings',
    'Make data-driven content strategy decisions',
    'Track and optimize for Core Web Vitals',
    'Reduce keyword cannibalization',
    'Improve internal linking structure'
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full px-6 py-3 mb-8">
              <Database className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 font-medium">AI-Powered SEO Intelligence</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              SEO Analytics & SQL Playbook
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform raw SEO data into actionable insights with our comprehensive SQL-based analytics platform. 
              Identify opportunities, fix technical issues, and drive organic growth.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">7</div>
              <div className="text-gray-400 text-sm">Core Analysis Queries</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
              <div className="text-gray-400 text-sm">SQL Templates</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">100%</div>
              <div className="text-gray-400 text-sm">Customizable</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">ANSI</div>
              <div className="text-gray-400 text-sm">SQL Standard</div>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Queries Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">High-Impact Analysis Queries</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Pre-built SQL queries to surface the most critical SEO opportunities and issues
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {queries.map((query) => (
              <div
                key={query.id}
                className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${query.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                    {query.icon}
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    query.impact === 'High' 
                      ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {query.impact} Impact
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Query {query.id}: {query.name}</h3>
                <p className="text-gray-400 text-sm">{query.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Platform Features</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need for enterprise-grade SEO analytics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Our SEO Analytics?</h2>
              <p className="text-xl text-gray-400 mb-8">
                Move beyond basic analytics tools. Get SQL-powered insights that scale with your business.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-300 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">What's Included</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Database className="w-5 h-5 text-blue-400" />
                  <span>Normalized SEO/Analytics Schema</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <FileText className="w-5 h-5 text-purple-400" />
                  <span>15+ Pre-built SQL Queries</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <BarChart3 className="w-5 h-5 text-pink-400" />
                  <span>Materialized Views for Rollups</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Zap className="w-5 h-5 text-orange-400" />
                  <span>Performance Optimization Tips</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Postgres Upgrades & Indexes</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <FileText className="w-5 h-5 text-teal-400" />
                  <span>Complete Documentation</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <div className="text-sm text-gray-400 mb-2">Compatible with:</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm">PostgreSQL</span>
                  <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm">MySQL</span>
                  <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm">BigQuery</span>
                  <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm">Snowflake</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Implementation</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Production-ready schema design with performance optimization built-in
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Data Sources</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                  Google Search Console
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                  Google Analytics
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                  HTTP Server Logs
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                  Core Web Vitals API
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Optimization</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                  Partitioned Tables
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                  Covering Indexes
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                  Materialized Views
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                  GIN Full-Text Search
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4 text-pink-400">Scalability</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-400"></div>
                  Monthly Partitioning
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-400"></div>
                  Query Optimization
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-400"></div>
                  Incremental Rollups
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-400"></div>
                  Scheduled Refreshes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 border border-blue-500/20 rounded-2xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Unlock Your SEO Potential?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get started with our SQL-powered SEO analytics platform and transform your organic traffic strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:jon@folsetech.net?subject=SEO%20Analytics%20Consultation"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/50"
              >
                <Database className="w-5 h-5" />
                Schedule Consultation
              </a>
              <Link
                to="/pricing-availability"
                className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SEOAnalytics
