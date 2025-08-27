'use client';

import { useState, useEffect } from 'react';

interface IPInfo {
  ip: string;
  country: string;
  country_code: string;
  region: string;
  city: string;
}

interface LocationInfo {
  flag: string;
  displayLocation: string;
  supportedServices: string[];
}

export default function IPDetector({ onLocationChange }: { onLocationChange?: (locationInfo: LocationInfo) => void }) {
  const [ipInfo, setIPInfo] = useState<IPInfo | null>(null);
  const [locationInfo, setLocationInfo] = useState<LocationInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getLocationInfo = (ipInfo: IPInfo): LocationInfo => {
    const countryCode = ipInfo.country_code?.toUpperCase();
    
    // 处理中国地区（包括台湾、香港、澳门）
    if (countryCode === 'TW') {
      return {
        flag: '🇨🇳',
        displayLocation: `${ipInfo.city}, Taiwan, China`,
        supportedServices: ['claude'] // 台湾IP只显示Claude
      };
    } else if (countryCode === 'HK') {
      return {
        flag: '🇨🇳',
        displayLocation: `${ipInfo.city}, Hong Kong SAR, China`,
        supportedServices: ['claude'] // 香港IP显示Claude
      };
    } else if (countryCode === 'MO') {
      return {
        flag: '🇨🇳',
        displayLocation: `${ipInfo.city}, Macau SAR, China`,
        supportedServices: ['claude'] // 澳门IP显示Claude
      };
    } else if (countryCode === 'CN') {
      return {
        flag: '🇨🇳',
        displayLocation: `${ipInfo.city}, ${ipInfo.region}, China`,
        supportedServices: [] // 中国大陆IP暂不支持任何服务
      };
    }
    
    // 美国IP
    if (countryCode === 'US') {
      return {
        flag: '🇺🇸',
        displayLocation: `${ipInfo.city}, ${ipInfo.region}, United States`,
        supportedServices: ['chatgpt', 'grok', 'gemini']
      };
    }
    
    // 其他国家旗帜映射
    const flagMap: { [key: string]: string } = {
      'JP': '🇯🇵',
      'KR': '🇰🇷',
      'SG': '🇸🇬',
      'GB': '🇬🇧',
      'CA': '🇨🇦',
      'AU': '🇦🇺',
      'DE': '🇩🇪',
      'FR': '🇫🇷',
    };
    
    return {
      flag: flagMap[countryCode] || '🌍',
      displayLocation: `${ipInfo.city}, ${ipInfo.region}, ${ipInfo.country}`,
      supportedServices: ['chatgpt', 'grok', 'gemini'] // 其他国家默认显示美国IP服务
    };
  };

  useEffect(() => {
    const fetchIPInfo = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // 使用ipapi.co免费API
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) {
          throw new Error('Failed to fetch IP information');
        }
        
        const data = await response.json();
        setIPInfo(data);
        
        const locInfo = getLocationInfo(data);
        setLocationInfo(locInfo);
        
        // 通知父组件位置信息变化
        if (onLocationChange) {
          onLocationChange(locInfo);
        }
      } catch (err) {
        setError('Unable to detect IP location');
        console.error('Error fetching IP info:', err);
        
        // 错误时使用默认值
        const defaultLocationInfo: LocationInfo = {
          flag: '🇺🇸',
          displayLocation: 'Location Unknown',
          supportedServices: ['chatgpt', 'grok', 'gemini']
        };
        setLocationInfo(defaultLocationInfo);
        
        if (onLocationChange) {
          onLocationChange(defaultLocationInfo);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchIPInfo();
  }, [onLocationChange]);

  if (loading) {
    return (
      <div className="flex items-center space-x-2 text-sm text-gray-500 bg-gray-50 px-3 py-2 rounded-lg">
        <div className="animate-spin w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full"></div>
        <span>Detecting IP...</span>
      </div>
    );
  }

  if (error || !locationInfo) {
    return (
      <div className="flex items-center space-x-2 text-sm text-gray-500 bg-gray-50 px-3 py-2 rounded-lg">
        <span>🌍</span>
        <span>IP Detection Failed</span>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2 text-sm text-gray-700 bg-white border border-gray-200 px-4 py-3 rounded-lg shadow-sm max-w-md mx-auto">
      <span className="text-lg">{locationInfo.flag}</span>
      <div className="flex flex-col">
        <div className="font-medium">
          Your IP: <span className="font-mono text-blue-600">{ipInfo?.ip || 'Unknown'}</span>
        </div>
        <div className="text-xs text-gray-500">
          {locationInfo.displayLocation}
        </div>
      </div>
    </div>
  );
}