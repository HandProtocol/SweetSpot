import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Clock } from 'lucide-react';
import toast from 'react-hot-toast';

interface RoundData {
  name: string;
  description: string;
  startTime: string;
  endTime: string;
}

export function AdminForm() {
  const [roundData, setRoundData] = useState<RoundData>({
    name: '',
    description: '',
    startTime: '',
    endTime: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Simulated update
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Round settings updated successfully!');
    } catch (error) {
      toast.error('Failed to update round settings.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Round Settings</h2>
        <Settings className="h-6 w-6 text-purple-600" />
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Round Name
          </label>
          <input
            type="text"
            value={roundData.name}
            onChange={(e) => setRoundData({ ...roundData, name: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="e.g., Genesis Round, Community Distribution Phase 1"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Round Description
          </label>
          <textarea
            value={roundData.description}
            onChange={(e) => setRoundData({ ...roundData, description: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent h-32 resize-none"
            placeholder="Describe the purpose and goals of this distribution round..."
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Time
            </label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="datetime-local"
                value={roundData.startTime}
                onChange={(e) => setRoundData({ ...roundData, startTime: e.target.value })}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              End Time
            </label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="datetime-local"
                value={roundData.endTime}
                onChange={(e) => setRoundData({ ...roundData, endTime: e.target.value })}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                required
              />
            </div>
          </div>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
        >
          Update Round Settings
        </motion.button>
      </form>
    </motion.div>
  );
}