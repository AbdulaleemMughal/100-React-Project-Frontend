export const MissionCard = () => {
  return (
    <div className="p-8 bg-white rounded-3xl backdrop-blur-xl font-[Inter] shadow-xl">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-6 text-center space-y-10">
          <div>
            <h2 className="font-bold text-blue-600 text-3xl">100+</h2>
            <p className="text-sm text-gray-500">Projects</p>
          </div>
          <div>
            <h2 className="font-bold text-green-600 text-3xl">75K+</h2>
            <p className="text-sm text-gray-500">Learners</p>
          </div>
        </div>
        <div className="col-span-6 text-center space-y-10">
          <div>
            <h2 className="font-bold text-purple-600 text-3xl">100%</h2>
            <p className="text-sm text-gray-500">Free</p>
          </div>
          <div>
            <h2 className="font-bold text-orange-600 text-3xl">24/7</h2>
            <p className="text-sm text-gray-500">Access</p>
          </div>
        </div>
      </div>
    </div>
  );
};
