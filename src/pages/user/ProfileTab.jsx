import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LuUserRound } from 'react-icons/lu';
import { BiEdit } from 'react-icons/bi';

const ProfileTab = ({ user, setUser, onOpenChange }) => {
  const [editedName, setEditedName] = useState(user?.name || '');
  const [editedUsername, setEditedUsername] = useState(user?.username || '');
  const [editedBio, setEditedBio] = useState('');
  const [editedLocation, setEditedLocation] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [originalValues, setOriginalValues] = useState({
    name: user?.name || '',
    username: user?.username || '',
    bio: '',
    location: ''
  });

  const handleChange = (e, setter) => {
    const newValue = e.target.value;
    setter(newValue);
    const currentValues = {
      name: setter === setEditedName ? newValue : editedName,
      username: setter === setEditedUsername ? newValue : editedUsername,
      bio: setter === setEditedBio ? newValue : editedBio,
      location: setter === setEditedLocation ? newValue : editedLocation
    };
    
    setIsEditing(
      currentValues.name !== originalValues.name ||
      currentValues.username !== originalValues.username ||
      currentValues.bio !== originalValues.bio ||
      currentValues.location !== originalValues.location
    );
  };

  return (
    <div className="flex flex-col h-full relative">
      <div className="flex-1 space-y-8 px-8 py-6 overflow-y-auto pb-20">
        <h2 className="text-xl font-medium text-left">Profile</h2>
        
        <div className="flex items-center justify-between">
          <h3 className="text-sm text-gray-600">Avatar</h3>
          <div className="relative">
            <div className="h-16 w-16 rounded-full bg-[#8F8F8F] flex items-center justify-center hover:bg-[#7F7F7F] transition-colors duration-200">
              <LuUserRound className="h-8 w-8 text-white" />
            </div>
            <div className="absolute -right-1 -bottom-1">
              <button className="p-1 bg-white rounded-md shadow-md border hover:bg-gray-50">
                <BiEdit className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm text-gray-600">Full Name</h3>
          <Input
            value={editedName}
            onChange={(e) => handleChange(e, setEditedName)}
            placeholder="Add name"
            className="focus:border-black"
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-sm text-gray-600">Username</h3>
          <Input
            value={editedUsername}
            onChange={(e) => handleChange(e, setEditedUsername)}
            placeholder="Add username"
            className="focus:border-black"
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-sm text-gray-600">Bio</h3>
          <textarea
            value={editedBio}
            onChange={(e) => handleChange(e, setEditedBio)}
            className="w-full p-2 border-2 rounded-lg min-h-24 text-sm resize-none focus:border-black focus:outline-none placeholder-gray-500"
            placeholder="Write something about yourself..."
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-sm text-gray-600">Location</h3>
          <Input
            value={editedLocation}
            onChange={(e) => handleChange(e, setEditedLocation)}
            placeholder="Change your location"
            className="focus:border-black placeholder-gray-500"
          />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white w-full">
        <div className="border-t border-gray-300 w-full" />
        <div className="flex justify-end gap-3 max-w-2xl mx-auto mb-2 px-8 py-2">
          <Button 
            variant="default"
            className={!isEditing ? 'bg-gray-300 cursor-not-allowed' : 'bg-black'}
            disabled={!isEditing}
            onClick={() => {
              setIsEditing(false);
              setOriginalValues({
                name: editedName,
                username: editedUsername,
                bio: editedBio,
                location: editedLocation
              });
            }}
          >
            Save changes
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              setEditedName(originalValues.name);
              setEditedUsername(originalValues.username);
              setEditedBio(originalValues.bio);
              setEditedLocation(originalValues.location);
              setIsEditing(false);
              onOpenChange(false);
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;
