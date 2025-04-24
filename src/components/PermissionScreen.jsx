import React, { useState } from 'react';
import { Shield, Lock, Eye, Info, Check, X } from 'lucide-react';

const PermissionScreen = ({ onAllow }) => {
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 p-6 flex flex-col items-center">
          <Shield className="text-white mb-4" size={48} />
          <h1 className="text-white text-2xl font-bold text-center">Allow Access to App Data?</h1>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <p className="text-gray-700 mb-6 text-center">
            This app would like permission to access and analyze your data to provide personalized features.
          </p>
          
          {/* Permission details */}
          <div className="mb-6 space-y-4">
            <div className="flex items-start space-x-4">
              <Lock className="text-blue-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-medium text-gray-800">Secure Access</h3>
                <p className="text-gray-600 text-sm">Your data is encrypted and securely transmitted</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Eye className="text-blue-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-medium text-gray-800">Data Usage</h3>
                <p className="text-gray-600 text-sm">Used to provide personalized recommendations and improve app experience</p>
              </div>
            </div>
          </div>
          
          {/* Show/Hide Details */}
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center justify-center w-full py-2 text-sm text-blue-600 hover:text-blue-800 mb-4 transition-colors"
          >
            <Info size={16} className="mr-1" />
            {showDetails ? "Hide Details" : "View More Details"}
          </button>
          
          {/* Additional details */}
          {showDetails && (
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-medium text-gray-800 mb-2">Data We Access:</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <Check size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  User preferences and settings
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  Usage patterns and interactions
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  Content you've created within the app
                </li>
              </ul>
              
              <h3 className="font-medium text-gray-800 mt-4 mb-2">We Do Not Access:</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <X size={16} className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                  Personal contacts or messages
                </li>
                <li className="flex items-start">
                  <X size={16} className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                  Photos or media not shared with the app
                </li>
                <li className="flex items-start">
                  <X size={16} className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                  Data from other apps on your device
                </li>
              </ul>
              
              <p className="text-xs text-gray-500 mt-4">
                You can change these permissions at any time in your app settings.
              </p>
            </div>
          )}
          
          {/* Permission buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-4 rounded-lg font-medium transition-colors">
              Deny
            </button>
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
              onClick={onAllow}
            >
              Allow
            </button>
          </div>
        </div>
        
        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-xs text-center text-gray-500">
            By allowing access, you agree to our <a href="https://www.google.com/webhp?hl=en&ictx=2&sa=X&ved=0ahUKEwj6i4GrzfCMAxUKQEEAHcBWHiAQPQgK" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="https://www.google.com/webhp?hl=en&ictx=2&sa=X&ved=0ahUKEwj6i4GrzfCMAxUKQEEAHcBWHiAQPQgK" className="text-blue-600 hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PermissionScreen;