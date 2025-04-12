
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useToast } from "@/hooks/use-toast";
import Navigation from '@/components/Navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Camera, User, MapPin, Briefcase, Phone, Calendar, Globe, Save, LogOut } from 'lucide-react';

interface ProfileFormData {
  name: string;
  occupation: string;
  location: string;
  birthDate: string;
  phone: string;
  language: string;
}

const ProfilePage: React.FC = () => {
  const { user, logout } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm<ProfileFormData>({
    defaultValues: {
      name: user?.name || '',
      occupation: '',
      location: '',
      birthDate: '',
      phone: '',
      language: 'English'
    }
  });
  
  const onSubmit = async (data: ProfileFormData) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast({
          title: "Authentication Error",
          description: "You need to be logged in to update your profile",
          variant: "destructive",
        });
        return;
      }
      
      // Replace with your backend URL
      const response = await fetch('http://localhost:5000/api/user/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        throw new Error('Failed to update profile');
      }
      
      toast({
        title: "Profile Updated",
        description: "Your profile has been successfully updated.",
      });
      
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
      toast({
        title: "Update Failed",
        description: "There was an error updating your profile.",
        variant: "destructive",
      });
    }
  };
  
  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-dark">
      <Navigation />
      
      <main className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-white">My Profile</h1>
            <Button variant="outline" onClick={logout} className="border-red-500 text-red-500 hover:bg-red-500/10">
              <LogOut className="mr-2 h-4 w-4" /> Sign Out
            </Button>
          </div>
          
          <div className="grid md:grid-cols-[1fr_2fr] gap-8">
            {/* Profile Sidebar */}
            <div className="space-y-6">
              <div className="bg-glass rounded-xl p-6 text-center">
                <div className="relative mx-auto w-32 h-32 mb-4">
                  <div className="w-32 h-32 rounded-full bg-purple/20 flex items-center justify-center overflow-hidden">
                    {user.profilePic ? (
                      <img src={user.profilePic} alt={user.name} className="w-full h-full object-cover" />
                    ) : (
                      <User size={64} className="text-purple/60" />
                    )}
                  </div>
                  <button className="absolute bottom-0 right-0 bg-purple text-white p-2 rounded-full hover:bg-teal transition-colors">
                    <Camera size={16} />
                  </button>
                </div>
                <h2 className="text-xl font-semibold text-white">{user.name}</h2>
                <p className="text-gray-400">{user.email}</p>
              </div>
              
              <div className="bg-glass rounded-xl p-6">
                <h3 className="text-lg font-medium text-white mb-4">Account Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="mr-2 h-4 w-4 text-purple" />
                    <span>Joined April 2023</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Briefcase className="mr-2 h-4 w-4 text-purple" />
                    <span>Software Engineer</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="mr-2 h-4 w-4 text-purple" />
                    <span>New York, USA</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Profile Content */}
            <div>
              <div className="bg-glass rounded-xl p-6 mb-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium text-white">Personal Information</h3>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsEditing(!isEditing)}
                    className="border-purple hover:bg-purple/10 text-sm"
                  >
                    {isEditing ? 'Cancel' : 'Edit Profile'}
                  </Button>
                </div>
                
                {isEditing ? (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        {...register("name", {
                          required: "Name is required"
                        })}
                        className="bg-white/5 border-white/10 text-white"
                      />
                      {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="occupation">Occupation</Label>
                      <Input
                        id="occupation"
                        placeholder="Software Engineer"
                        {...register("occupation")}
                        className="bg-white/5 border-white/10 text-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        placeholder="New York, USA"
                        {...register("location")}
                        className="bg-white/5 border-white/10 text-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="birthDate">Birth Date</Label>
                      <Input
                        id="birthDate"
                        type="date"
                        {...register("birthDate")}
                        className="bg-white/5 border-white/10 text-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="+1 (555) 123-4567"
                        {...register("phone")}
                        className="bg-white/5 border-white/10 text-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="language">Preferred Language</Label>
                      <Input
                        id="language"
                        placeholder="English"
                        {...register("language")}
                        className="bg-white/5 border-white/10 text-white"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="bg-gradient-to-r from-purple to-teal hover:opacity-90 mt-4"
                    >
                      <Save className="mr-2 h-4 w-4" /> Save Changes
                    </Button>
                  </form>
                ) : (
                  <div className="space-y-4 text-gray-300">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-400">Full Name</p>
                        <p>{user.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Email</p>
                        <p>{user.email}</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-400">Occupation</p>
                        <p>Software Engineer</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Location</p>
                        <p>New York, USA</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-400">Phone</p>
                        <p>+1 (555) 123-4567</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Language</p>
                        <p>English</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="bg-glass rounded-xl p-6">
                <h3 className="text-lg font-medium text-white mb-4">Personality Insights</h3>
                <p className="text-gray-300 mb-4">
                  Based on your conversations with PersonaScope, here are your top personality traits:
                </p>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-300">Openness</span>
                      <span className="text-sm text-gray-400">85%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple to-teal h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-300">Conscientiousness</span>
                      <span className="text-sm text-gray-400">72%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple to-teal h-2 rounded-full" style={{ width: '72%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-300">Extraversion</span>
                      <span className="text-sm text-gray-400">63%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple to-teal h-2 rounded-full" style={{ width: '63%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-300">Agreeableness</span>
                      <span className="text-sm text-gray-400">78%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple to-teal h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-300">Neuroticism</span>
                      <span className="text-sm text-gray-400">45%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple to-teal h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
