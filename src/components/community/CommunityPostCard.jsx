import { useState } from 'react';
import favoriteIcon from "../../assets/svg/favorite.svg";
import heartIcon from "../../assets/svg/heart.svg";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { PiChatCircle } from "react-icons/pi";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useBookmarks } from "@/context/BookmarkContext";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import PropTypes from 'prop-types';

const ImageGrid = ({ images }) => {
  if (!images || images.length === 0) return null;

  const displayImages = images.slice(0, 4);
  const remainingImages = images.length > 4 ? images.length - 4 : 0;

  const getGridLayout = () => {
    switch (displayImages.length) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-2";
      case 3:
        return "grid-cols-2";
      case 4:
        return "grid-cols-2";
      default:
        return "grid-cols-1";
    }
  };

  return (
    <div className={`grid ${getGridLayout()} gap-3`}>
      {displayImages.length === 1 && (
        <div className="relative w-full rounded-2xl overflow-hidden">
          <AspectRatio ratio={16 / 9}>
            <img 
              src={displayImages[0]} 
              alt="Post image" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AspectRatio>
        </div>
      )}

      {displayImages.length === 2 && displayImages.map((image, index) => (
        <div key={index} className="relative w-full rounded-2xl overflow-hidden">
          <AspectRatio ratio={4 / 3}>
            <img 
              src={image} 
              alt={`Post image ${index + 1}`} 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AspectRatio>
        </div>
      ))}

      {displayImages.length === 3 && (
        <>
          <div className="col-span-2 relative w-full rounded-2xl overflow-hidden">
            <AspectRatio ratio={16 / 9}>
              <img 
                src={displayImages[0]} 
                alt="Post image 1" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
          {displayImages.slice(1).map((image, index) => (
            <div key={index} className="relative w-full rounded-2xl overflow-hidden">
              <AspectRatio ratio={4 / 3}>
                <img 
                  src={image} 
                  alt={`Post image ${index + 2}`} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
          ))}
        </>
      )}

      {displayImages.length === 4 && (
        <>
          {displayImages.map((image, index) => (
            <div key={index} className="relative w-full rounded-2xl overflow-hidden">
              <AspectRatio ratio={1}>
                <img 
                  src={image} 
                  alt={`Post image ${index + 1}`} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {index === 3 && remainingImages > 0 && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-white text-lg font-medium">+{remainingImages}</span>
                  </div>
                )}
              </AspectRatio>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

ImageGrid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string)
};

const CommunityPostCard = ({ 
  avatar, 
  name, 
  timeAgo, 
  content, 
  images,
  likesImage, 
  likesCount, 
  commentsCount 
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const { toggleBookmark, isBookmarked } = useBookmarks();
  const post = { avatar, name, timeAgo, content, images, likesImage, likesCount, commentsCount };
  const bookmarked = isBookmarked(post);

  return (
    <TooltipProvider>
      <div className="w-full bg-[#F8F7F7] border border-[#D4D4D4] rounded-2xl mb-6">
        <div className="px-6 pt-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img src={avatar} alt="User avatar" className="w-10 h-10 rounded-full" />
              <div>
                <h3 className="font-medium text-gray-900">{name}</h3>
                <p className="text-sm text-gray-500">Posted {timeAgo}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Tooltip>
                <TooltipTrigger>
                  {bookmarked ? (
                    <FaBookmark 
                      className="text-[#5762D5] cursor-pointer" 
                      size={20} 
                      onClick={() => toggleBookmark(post)}
                    />
                  ) : (
                    <FaRegBookmark 
                      className="text-gray-600 cursor-pointer hover:text-[#5762D5]" 
                      size={20} 
                      onClick={() => toggleBookmark(post)}
                    />
                  )}
                </TooltipTrigger>
                <TooltipContent className="bg-[#5762D5]">
                  <span>Bookmark</span>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <BsThreeDots className="text-gray-600 cursor-pointer hover:text-[#5762D5]" size={20} />
                </TooltipTrigger>
                <TooltipContent className="bg-[#5762D5]">
                  <span>More</span>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-gray-800">{content}</p>
          </div>
        </div>

        {images && images.length > 0 && (
          <div className="px-6">
            <ImageGrid images={images} />
          </div>
        )}

        <div className="px-6 pt-3 pb-4">
          <div className="border-t border-[#D4D4D4] pt-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <img src={likesImage} alt="Likes" className="h-6" />
                  <span className="text-sm text-gray-600">{likesCount} likes</span>
                </div>
                <span className="text-sm text-gray-600">{commentsCount} comments</span>
              </div>
              <div className="flex items-center gap-4">
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex items-center gap-3 cursor-pointer">
                      <PiChatCircle size={20} className="text-gray-600 hover:text-[#5762D5]" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#5762D5]">
                    <span>Comment</span>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger>
                    <img 
                      src={isLiked ? heartIcon : favoriteIcon} 
                      alt="Like" 
                      className="w-5 h-5 cursor-pointer hover:text-[#5762D5]"
                      onClick={() => setIsLiked(!isLiked)}
                    />
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#5762D5]">
                    <span>Like</span>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

CommunityPostCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  timeAgo: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
  likesImage: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired,
  commentsCount: PropTypes.number.isRequired
};

export default CommunityPostCard;
