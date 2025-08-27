export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-full">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Super Chat
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          集成主流大语言模型的聊天入口
        </p>
        
        {/* 中间区域暂时预留 */}
        <div className="py-16">
          <p className="text-gray-400 text-sm">
            中间区域功能开发中...
          </p>
        </div>
      </div>
    </div>
  );
}
