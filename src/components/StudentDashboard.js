import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';
import { Calendar, ChevronLeft, ChevronRight, BookOpen, Users, User2, Clock, BarChart3, FileText, Settings, Bell, Menu } from 'lucide-react';
import { Card, CardContent } from "./ui/Card";


const monthlyGradeData = [
  { month: 'Jan', value: 75 },
  { month: 'Feb', value: 78 },
  { month: 'Mar', value: 76 },
  { month: 'Apr', value: 79 },
  { month: 'May', value: 77 },
  { month: 'Jun', value: 78 },
  { month: 'Jul', value: 76 },
  { month: 'Aug', value: 78 }
];

const TopStudent = ({ name, image, progress }) => (
  <div className="flex items-center gap-3 mb-4">
    <img src={`/api/placeholder/32/32`} alt={name} className="rounded-full" />
    <div className="flex-1">
      <p className="text-sm font-medium">{name}</p>
      <p className="text-xs text-gray-500">Student A21</p>
    </div>
    <div className="flex items-center text-green-500">
      <span className="text-sm">+{progress}%</span>
    </div>
  </div>
);

const StudentDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r p-4">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <img src="/api/placeholder/40/40" alt="Profile" className="rounded-full" />
            <div>
              <h3 className="font-medium">Kristina Carter</h3>
              <p className="text-sm text-gray-500">High School Student</p>
            </div>
          </div>
          
          <nav className="space-y-2">
            <button className="flex items-center gap-3 w-full p-2 bg-purple-100 text-purple-600 rounded">
              <BookOpen size={20} />
              <span>Home Page</span>
            </button>
            {[
              { icon: <Users size={20} />, label: 'Students' },
              { icon: <User2 size={20} />, label: 'Teachers' },
              { icon: <Calendar size={20} />, label: 'Events' },
              { icon: <BarChart3 size={20} />, label: 'Stats' },
              { icon: <FileText size={20} />, label: 'Reporting' },
              { icon: <Settings size={20} />, label: 'Tools' }
            ].map((item, index) => (
              <button key={index} className="flex items-center gap-3 w-full p-2 text-gray-600 hover:bg-gray-50 rounded">
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Home Page</h1>
          <div className="flex items-center gap-4">
            <input
              type="search"
              placeholder="Search..."
              className="px-4 py-2 border rounded-lg"
            />
            <button className="px-4 py-2 bg-white border rounded-lg">
              Change Period
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-2xl font-semibold mb-1">4,293</h3>
              <p className="text-gray-500 text-sm">Total Students</p>
              <span className="text-green-500 text-xs">+5% from last week</span>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-2xl font-semibold mb-1">324</h3>
              <p className="text-gray-500 text-sm">Total Teachers</p>
              <span className="text-red-500 text-xs">-2% from last year</span>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-1">94</h3>
                  <p className="text-gray-500 text-sm">Total Events</p>
                </div>
                <div className="w-16 h-16 rounded-full border-4 border-purple-500 flex items-center justify-center">
                  <span className="text-lg font-semibold">75%</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-1">249 h</h3>
                  <p className="text-gray-500 text-sm">Average Attendance</p>
                </div>
                <div className="w-16 h-16 rounded-full border-4 border-yellow-500 flex items-center justify-center">
                  <span className="text-lg font-semibold">85%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">School Finance</h3>
                <select className="border rounded px-2 py-1">
                  <option>Weekly</option>
                </select>
              </div>
              {/* Placeholder for bar chart */}
              <div className="h-48 bg-gray-50 rounded"></div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Grade by Months</h3>
                <select className="border rounded px-2 py-1">
                  <option>Maths</option>
                </select>
              </div>
              <LineChart width={500} height={200} data={monthlyGradeData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">School Event Calendar</h3>
                <button className="text-purple-600">+</button>
              </div>
              {/* Calendar Component */}
              <div className="border rounded p-4">
                <div className="flex justify-between items-center mb-4">
                  <button><ChevronLeft size={20} /></button>
                  <span>Aug 2022</span>
                  <button><ChevronRight size={20} /></button>
                </div>
                {/* Calendar grid would go here */}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-4">Top 5 in Academic Progress</h3>
              <TopStudent name="Esther Howard" progress={24} />
              <TopStudent name="Kristin Watson" progress={22} />
              <TopStudent name="Guy Hawkins" progress={21} />
              <TopStudent name="Jacob Jones" progress={18} />
              <TopStudent name="Robert Fox" progress={16} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;