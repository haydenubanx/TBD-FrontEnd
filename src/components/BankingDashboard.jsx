import React, { useState, useEffect } from 'react';
import { 
  CreditCard, 
  Wallet, 
  PiggyBank, 
  BarChart2, 
  Clock, 
  ChevronRight, 
  Bell, 
  Settings, 
  User,
  TrendingUp,
  SunMoon,
  Heart,
  BookOpen,
  CheckSquare,
  Filter,
  Award,
  Star
} from 'lucide-react';

// Lloyds Bank color scheme
const colors = {
  primary: '#006A4D', // Lloyds green
  primaryLight: '#E6F2EF',
  primaryDark: '#004D3A',
  secondary: '#0F5B94', // Lloyds blue
  secondaryLight: '#E6EFF5',
  highlight: '#EC6662', // Lloyds coral/red
  dark: '#2E3030',
  light: '#FFFFFF',
  gray: '#F2F2F2',
  grayDark: '#797B7D'
};

const BankingDashboard = () => {
  // State initialization
  const [loading, setLoading] = useState(true);
  const [zenMode, setZenMode] = useState(false);
  const [selectedAccounts, setSelectedAccounts] = useState([]);
  const [showAccountSelector, setShowAccountSelector] = useState(false);
  
  // Mock user data
  const userData = {
    name: "Alex Johnson",
    lastLogin: "Today, 10:32 AM",
    totalBalance: 42684.29,
    totalSavings: 630.45,
    rentPaid: true,
    accounts: [
      {
        id: 1,
        type: "Current Account",
        name: "Everyday Checking",
        balance: 3249.78,
        accountNumber: "**** 4582",
        icon: <Wallet size={24} />,
        color: `bg-[${colors.primaryLight}] text-[${colors.primary}]`,
        recentTransactions: [
          { id: 1, name: "Grocery Store", amount: -89.24, date: "Today" },
          { id: 2, name: "Salary Deposit", amount: 3200.00, date: "Yesterday" },
          { id: 3, name: "Electric Bill", amount: -124.79, date: "Apr 22" }
        ]
      },
      {
        id: 2,
        type: "Savings Account",
        name: "Emergency Fund",
        balance: 15782.33,
        accountNumber: "**** 7891",
        icon: <PiggyBank size={24} />,
        color: `bg-[${colors.secondaryLight}] text-[${colors.secondary}]`,
        interestRate: "1.25% APY",
        recentTransactions: [
          { id: 1, name: "Interest Payment", amount: 18.13, date: "Apr 20" },
          { id: 2, name: "Transfer from Checking", amount: 500.00, date: "Apr 15" }
        ]
      },
      {
        id: 3,
        type: "Credit Card",
        name: "Rewards Platinum",
        balance: -1842.67,
        limit: 10000,
        accountNumber: "**** 3354",
        icon: <CreditCard size={24} />,
        color: "bg-blue-100 text-blue-600",
        dueDate: "May 15",
        recentTransactions: [
          { id: 1, name: "Restaurant", amount: -128.45, date: "Apr 21" },
          { id: 2, name: "Online Shopping", amount: -79.99, date: "Apr 20" },
          { id: 3, name: "Payment", amount: 500.00, date: "Apr 10" }
        ]
      },
      {
        id: 4,
        type: "Investment",
        name: "Growth Portfolio",
        balance: 25495.52,
        accountNumber: "**** 9213",
        icon: <BarChart2 size={24} />,
        color: "bg-amber-100 text-amber-600",
        performance: "+5.8%",
        recentTransactions: [
          { id: 1, name: "AAPL Stock Buy", amount: -2000.00, date: "Apr 18" },
          { id: 2, name: "Dividend Payment", amount: 134.28, date: "Apr 15" }
        ]
      }
    ]
  };

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Get a random positive reinforcement message
  const getPositiveMessage = () => {
    const messages = [
      {
        title: "Great job saving!",
        message: `You've saved £${userData.totalSavings.toFixed(2)} this month. You're on your way to becoming a millionaire!`
      },
      {
        title: "Bills under control!",
        message: "You've paid all your bills on time this month. That's financial responsibility at its finest!"
      },
      {
        title: "Budget champion!",
        message: "You've stayed within your budget for the third month in a row. That's an impressive streak!"
      },
      {
        title: "Smart spending!",
        message: "Your spending has decreased by 12% compared to last month. Every pound saved is a pound earned!"
      }
    ];

    // If rent is paid, add a specific message for that
    if (userData.rentPaid) {
      messages.push({
        title: "Rent paid!",
        message: "You've paid your rent this month. One less thing to worry about - well done!"
      });
    }

    // Return a random message
    return messages[Math.floor(Math.random() * messages.length)];
  };

  // Loading screen
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your accounts...</p>
        </div>
      </div>
    );
  }
  // Main component render
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className={`bg-[${colors.primary}] text-white p-2 rounded-lg mr-3`}>
              <Wallet size={24} />
            </div>
            <h1 className="text-xl font-bold text-gray-800">Lloyds Banking</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Zen Mode Toggle */}
            <div className="flex items-center mr-2">
              <div className="flex items-center px-3 py-1 bg-gray-100 rounded-full">
                <span className="text-sm font-medium mr-2">Zen Mode</span>
                <button 
                  onClick={() => {
                    setZenMode(!zenMode);
                    // Reset selected accounts when turning off zen mode
                    if (zenMode) {
                      setSelectedAccounts([]);
                      setShowAccountSelector(false);
                    }
                  }}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${zenMode ? `bg-[${colors.primary}]` : 'bg-gray-200'}`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${zenMode ? 'translate-x-6' : 'translate-x-1'}`} />
                  <SunMoon size={14} className={`absolute ${zenMode ? 'left-2 text-white' : 'right-2 text-gray-400'}`} />
                </button>
              </div>
            </div>
            
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell size={20} className="text-gray-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Settings size={20} className="text-gray-600" />
            </button>
            <div className="flex items-center space-x-2">
              <div className={`bg-[${colors.secondaryLight}] p-2 rounded-full`}>
                <User size={20} className={`text-[${colors.secondary}]`} />
              </div>
              <span className="hidden md:inline text-sm font-medium">{userData.name}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        {/* Welcome Section - Always visible */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Welcome back, {userData.name.split(' ')[0]}</h2>
            <p className="text-gray-500 text-sm flex items-center mt-1">
              <Clock size={14} className="mr-1" />
              Last login: {userData.lastLogin}
            </p>
          </div>
        </div>
        
        {/* Selected accounts in Zen Mode - Show at the top when accounts are selected */}
        {zenMode && showAccountSelector && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
            {userData.accounts
              .filter(account => selectedAccounts.includes(account.id))
              .map((account) => (
                <div key={account.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="p-6 pb-4">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`${account.color} p-3 rounded-lg`}>
                        {account.icon}
                      </div>
                      <div className="text-right">
                        <span className={`text-xs px-2 py-1 rounded-full ${account.performance && account.performance.startsWith('+') ? `bg-[${colors.primaryLight}] text-[${colors.primary}]` : ''}`}>
                          {account.performance && account.performance}
                          {account.interestRate && account.interestRate}
                          {account.dueDate && `Due: ${account.dueDate}`}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="font-medium text-gray-700">{account.type}</h3>
                    <p className="text-sm text-gray-500 mb-3">{account.name} • {account.accountNumber}</p>
                    
                    <div className="flex justify-between items-baseline">
                      <p className={`text-2xl font-bold ${account.type === 'Credit Card' ? 'text-red-600' : 'text-gray-800'}`}>
                        ${Math.abs(account.balance).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </p>
                      {account.type === 'Credit Card' && (
                        <p className="text-sm text-gray-500">
                          Limit: ${account.limit.toLocaleString('en-US')}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  {/* No transaction data in Zen Mode */}
                </div>
              ))}
          </div>
        )}
        {/* Zen Mode Tiles - Show if in Zen Mode */}
        {zenMode && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
            {/* Account Selector Tile - Only show when not viewing selected accounts */}
            {!showAccountSelector && (
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`bg-[${colors.primaryLight}] text-[${colors.primary}] p-3 rounded-lg`}>
                      <Filter size={24} />
                    </div>
                  </div>
                  
                  <h3 className="font-medium text-gray-700 mb-3">What accounts would you like to see in Zen mode?</h3>
                  <p className="text-sm text-gray-500 mb-4">Select which accounts you want to display</p>
                  
                  <div className="space-y-3">
                    {userData.accounts.map((account) => (
                      <div key={account.id} className="flex items-center">
                        <input 
                          type="checkbox" 
                          id={`account-${account.id}`} 
                          className={`w-4 h-4 mr-3 accent-[${colors.primary}]`}
                          checked={selectedAccounts.includes(account.id)}
                          onChange={() => {
                            if (selectedAccounts.includes(account.id)) {
                              setSelectedAccounts(selectedAccounts.filter(id => id !== account.id));
                            } else {
                              setSelectedAccounts([...selectedAccounts, account.id]);
                            }
                          }}
                        />
                        <label htmlFor={`account-${account.id}`} className="flex items-center">
                          <div className={`${account.color} p-2 rounded-md mr-3`}>
                            {account.icon}
                          </div>
                          <div>
                            <p className="font-medium text-gray-700">{account.name}</p>
                            <p className="text-sm text-gray-500">{account.type}</p>
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    className={`w-full mt-6 bg-[${colors.primary}] hover:bg-[${colors.primaryDark}] text-white py-2 rounded-lg font-medium transition-colors`}
                    onClick={() => setShowAccountSelector(true)}
                  >
                    Show Selected Accounts
                  </button>
                </div>
              </div>
            )}
            
            {/* Positive Reinforcement Tile - New addition */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className={`bg-[${colors.secondaryLight}] text-[${colors.secondary}] p-3 rounded-lg`}>
                    <Star size={24} />
                  </div>
                </div>
                
                {(() => {
                  const positiveMessage = getPositiveMessage();
                  return (
                    <>
                      <h3 className="font-medium text-gray-700 mb-3">{positiveMessage.title}</h3>
                      <p className="text-sm text-gray-500 mb-4">{positiveMessage.message}</p>
                    </>
                  );
                })()}
                
                <div className={`bg-[${colors.secondaryLight}] p-4 rounded-lg mb-4`}>
                  <div className="flex items-center">
                    <Award className={`text-[${colors.secondary}] mr-2`} size={20} />
                    <h4 className="font-medium text-gray-700">Your Achievements</h4>
                  </div>
                  <ul className="mt-2 space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <CheckSquare size={16} className={`text-[${colors.primary}] mr-2 mt-1 flex-shrink-0`} />
                      Consistently saved money for 3 months
                    </li>
                    <li className="flex items-start">
                      <CheckSquare size={16} className={`text-[${colors.primary}] mr-2 mt-1 flex-shrink-0`} />
                      Reduced unnecessary expenses by 15%
                    </li>
                  </ul>
                </div>
                
                <button 
                  className={`flex items-center justify-center w-full py-2 px-4 bg-[${colors.secondary}] hover:bg-[${colors.primary}] text-white rounded-lg font-medium transition-colors`}
                >
                  View Your Financial Journey
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
            
            {/* Mental Health Wellbeing Tile - Always show in Zen Mode */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className={`bg-[${colors.primaryLight}] text-[${colors.primary}] p-3 rounded-lg`}>
                    <Heart size={24} />
                  </div>
                </div>
                
                <h3 className="font-medium text-gray-700 mb-3">Feeling stressed about finances?</h3>
                <p className="text-sm text-gray-500 mb-4">Take a moment to practice mindfulness and reduce financial anxiety</p>
                
                <div className={`bg-[${colors.primaryLight}] p-4 rounded-lg mb-4`}>
                  <h4 className={`font-medium text-[${colors.primary}] mb-2`}>4-7-8 Breathing Exercise</h4>
                  <ol className="text-sm text-gray-600 space-y-2">
                    <li>1. Breathe in through your nose for 4 seconds</li>
                    <li>2. Hold your breath for 7 seconds</li>
                    <li>3. Exhale slowly through your mouth for 8 seconds</li>
                    <li>4. Repeat 4 times</li>
                  </ol>
                </div>
                
                <a 
                  href="https://www.google.com/webhp?hl=en&ictx=2&sa=X&ved=0ahUKEwj6i4GrzfCMAxUKQEEAHcBWHiAQPQgK" 
                  className={`flex items-center justify-center w-full py-2 px-4 bg-[${colors.primary}] hover:bg-[${colors.primaryDark}] text-white rounded-lg font-medium transition-colors`}
                >
                  View More Wellbeing Resources
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
            {/* Spending Journal Tile - Always show in Zen Mode */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className={`bg-[${colors.secondaryLight}] text-[${colors.secondary}] p-3 rounded-lg`}>
                    <BookOpen size={24} />
                  </div>
                </div>
                
                <h3 className="font-medium text-gray-700 mb-3">How are you feeling about your spending today?</h3>
                <p className="text-sm text-gray-500 mb-4">Writing down your thoughts can help you understand your financial habits</p>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-gray-600 italic">"Tracking my expenses this week made me realize where my money is actually going. I'm feeling more in control now."</p>
                  <p className="text-xs text-gray-500 mt-2">From your journal, 2 days ago</p>
                </div>
                
                <button 
                  className={`flex items-center justify-center w-full py-2 px-4 bg-[${colors.primary}] hover:bg-[${colors.primaryDark}] text-white rounded-lg font-medium transition-colors`}
                >
                  Write in Your Journal
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Regular mode account tiles */}
        {!zenMode && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
            {userData.accounts.map((account) => (
              <div key={account.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`${account.color} p-3 rounded-lg`}>
                      {account.icon}
                    </div>
                    <div className="text-right">
                      <span className={`text-xs px-2 py-1 rounded-full ${account.performance && account.performance.startsWith('+') ? `bg-[${colors.primaryLight}] text-[${colors.primary}]` : ''}`}>
                        {account.performance && account.performance}
                        {account.interestRate && account.interestRate}
                        {account.dueDate && `Due: ${account.dueDate}`}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="font-medium text-gray-700">{account.type}</h3>
                  <p className="text-sm text-gray-500 mb-3">{account.name} • {account.accountNumber}</p>
                  
                  <div className="flex justify-between items-baseline">
                    <p className={`text-2xl font-bold ${account.type === 'Credit Card' ? `text-[${colors.highlight}]` : 'text-gray-800'}`}>
                      ${Math.abs(account.balance).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                    {account.type === 'Credit Card' && (
                      <p className="text-sm text-gray-500">
                        Limit: ${account.limit.toLocaleString('en-US')}
                      </p>
                    )}
                  </div>
                </div>
                
                {/* Recent transactions section - Only show in non-Zen mode */}
                <div className="border-t border-gray-100 bg-gray-50">
                  <div className="p-4">
                    <p className="text-xs font-medium text-gray-500 mb-2">RECENT TRANSACTIONS</p>
                    {account.recentTransactions.slice(0, 2).map(transaction => (
                      <div key={transaction.id} className="flex justify-between items-center py-2">
                        <span className="text-sm text-gray-700">{transaction.name}</span>
                        <div className="flex items-center">
                          <span className={`text-sm font-medium ${transaction.amount > 0 ? `text-[${colors.primary}]` : 'text-gray-800'}`}>
                            {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </span>
                          <span className="text-xs text-gray-500 ml-2">{transaction.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`flex items-center justify-center w-full py-3 text-sm text-[${colors.secondary}] hover:bg-gray-100 transition-colors border-t border-gray-100`}>
                    View All Transactions
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Add Journal Tile to non-Zen mode */}
        {!zenMode && (
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 mb-8">
            {/* Spending Journal Tile */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className={`bg-[${colors.secondaryLight}] text-[${colors.secondary}] p-3 rounded-lg`}>
                    <BookOpen size={24} />
                  </div>
                </div>
                
                <h3 className="font-medium text-gray-700 mb-3">How are you feeling about your spending today?</h3>
                <p className="text-sm text-gray-500 mb-4">Writing down your thoughts can help you understand your financial habits</p>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-gray-600 italic">"Tracking my expenses this week made me realize where my money is actually going. I'm feeling more in control now."</p>
                  <p className="text-xs text-gray-500 mt-2">From your journal, 2 days ago</p>
                </div>
                
                <button 
                  className={`flex items-center justify-center w-full py-2 px-4 bg-[${colors.primary}] hover:bg-[${colors.primaryDark}] text-white rounded-lg font-medium transition-colors`}
                >
                  Write in Your Journal
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Quick Actions - Only in non-Zen mode or when accounts are shown in Zen mode */}
        {(!zenMode || (zenMode && showAccountSelector)) && (
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className={`bg-[${colors.primaryLight}] p-3 rounded-full mb-2`}>
                  <CreditCard size={20} className={`text-[${colors.primary}]`} />
                </div>
                <span className="text-sm font-medium text-gray-700">Pay Bills</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className={`bg-[${colors.secondaryLight}] p-3 rounded-full mb-2`}>
                  <TrendingUp size={20} className={`text-[${colors.secondary}]`} />
                </div>
                <span className="text-sm font-medium text-gray-700">Transfer</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="bg-purple-100 p-3 rounded-full mb-2">
                  <BarChart2 size={20} className="text-purple-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Investments</span>
                </button>
              <button className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className={`bg-[${colors.primaryLight}] p-3 rounded-full mb-2`}>
                  <PiggyBank size={20} className={`text-[${colors.primary}]`} />
                </div>
                <span className="text-sm font-medium text-gray-700">Save</span>
              </button>
            </div>
          </div>
        )}
        
        {/* Return to Zen Mode button - Show when viewing selected accounts */}
        {zenMode && showAccountSelector && (
          <div className="mb-8">
            <button 
              onClick={() => setShowAccountSelector(false)}
              className={`flex items-center justify-center py-3 px-6 border border-[${colors.primary}] text-[${colors.primary}] rounded-lg hover:bg-[${colors.primaryLight}] transition-colors`}
            >
              <SunMoon size={16} className="mr-2" />
              Return to Zen Mode Selection
            </button>
          </div>
        )}

        {/* Wellbeing Insights - Only in Zen mode */}
        {zenMode && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Wellbeing Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`bg-[${colors.primaryLight}] rounded-lg p-4`}>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center">
                    <Heart className={`text-[${colors.primary}] mr-2`} size={20} />
                    <h4 className="font-medium text-gray-700">Stress Level</h4>
                  </div>
                  <span className="text-sm text-gray-500">This Week</span>
                </div>
                <div className="mb-2 bg-white h-3 rounded-full">
                  <div className={`bg-[${colors.primary}] h-3 rounded-full w-4/12`}></div>
                </div>
                <p className={`text-sm text-[${colors.primary}]`}>Lower than 65% of users</p>
              </div>
              <div className={`bg-[${colors.secondaryLight}] rounded-lg p-4`}>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center">
                    <CheckSquare className={`text-[${colors.secondary}] mr-2`} size={20} />
                    <h4 className="font-medium text-gray-700">Mindful Sessions</h4>
                  </div>
                  <span className="text-sm text-gray-500">This Month</span>
                </div>
                <p className="text-2xl font-bold mb-1">7 sessions</p>
                <p className={`text-xs text-[${colors.primary}]`}>+3 from last month</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default BankingDashboard;