// ─── Types ────────────────────────────────────────────────────────────────────
 
export interface UserProfileProps {
  displayName: string;
  email: string;
  username: string;
  avatarSrc: string;
  hasCustomImage: boolean;
  roleLabel: string;
  roleClass: string;
  dotClass: string;
 
  isUploading: boolean;
  isDeleting: boolean;
  showDeleteConfirm: boolean;
  showAvatarMenu: boolean;
 
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteImage: () => void;
  onEditProfileClick: () => void;
  onShowDeleteConfirm: () => void;
  onHideDeleteConfirm: () => void;
  onToggleAvatarMenu: () => void;
  onCloseAvatarMenu: () => void;
}
 