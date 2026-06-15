/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Camera,
  Trash2,
  Pencil,
  Shield,
  Mail,
  User,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef } from "react";


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

  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteImage: () => void;
  onEditProfileClick: () => void;
  onShowDeleteConfirm: () => void;
  onHideDeleteConfirm: () => void;
}


function InfoRow({
  icon,
  label,
  value,
  mono = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | React.ReactNode;
  mono?: boolean;
}) {
  return (
    <div className="flex items-center justify-between px-5 py-3.5 gap-4 hover:bg-black/5 dark:hover:bg-white/2 transition-colors">
      <div className="flex items-center gap-2.5 text-muted-foreground shrink-0">
        <span className="opacity-60">{icon}</span>
        <span className="text-sm">{label}</span>
      </div>
      {typeof value === "string" ? (
        <span
          className={`text-sm font-medium text-foreground text-right truncate max-w-45 ${
            mono ? "font-mono text-xs text-muted-foreground tracking-tight" : ""
          }`}
        >
          {value}
        </span>
      ) : (
        <div className="flex justify-end">{value}</div>
      )}
    </div>
  );
}


function DeleteConfirmModal({
  isDeleting,
  onConfirm,
  onCancel,
}: {
  isDeleting: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-card border border-border rounded-2xl w-full max-w-75 p-7 shadow-2xl flex flex-col items-center gap-4 text-center animate-in slide-in-from-bottom-4 sm:slide-in-from-bottom-0 duration-200">
        <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
          <AlertTriangle className="h-5 w-5 text-red-500" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground text-sm">
            Remove photo?
          </h3>
          <p className="text-xs text-muted-foreground mt-1">
            Your default avatar will be restored.
          </p>
        </div>
        <div className="flex gap-2 w-full">
          <Button
            onClick={onCancel}
            className="flex-1 h-10 rounded-xl text-sm font-semibold text-muted-foreground bg-secondary hover:bg-secondary/80 border border-border transition-colors"
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            disabled={isDeleting}
            className="flex-1 h-10 rounded-xl text-sm font-semibold text-red-500 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 transition-colors flex items-center justify-center gap-1.5 disabled:opacity-50"
          >
            {isDeleting ? (
              <span className="h-4 w-4 rounded-full border-2 border-red-400/30 border-t-red-500 animate-spin" />
            ) : (
              <>
                <Trash2 className="h-3.5 w-3.5" />
                Remove
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}



function AvatarSection({
  avatarSrc,
  displayName,
  hasCustomImage,
  isUploading,
  onUploadClick,
  onRemoveClick,
}: {
  avatarSrc: string;
  displayName: string;
  hasCustomImage: boolean;
  isUploading: boolean;
  onUploadClick: () => void;
  onRemoveClick: () => void;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative">
        <div className="w-24 h-24 rounded-full ring-4 ring-indigo-500/40 ring-offset-2 ring-offset-card shadow-lg overflow-hidden">
          <img
            src={avatarSrc}
            alt={displayName}
            className="w-full h-full object-cover"
          />
        </div>
        {isUploading && (
          <div className="absolute inset-0 rounded-full bg-black/50 flex items-center justify-center">
            <span className="h-6 w-6 rounded-full border-2 border-white/20 border-t-white animate-spin" />
          </div>
        )}
      </div>

      <div className="flex items-center gap-2">
        <Button
          onClick={onUploadClick}
          disabled={isUploading}
          aria-label="Change profile photo"
          className="flex items-center gap-1.5 h-8 px-3 rounded-full text-xs font-semibold
            bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700
            text-white shadow-sm transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <Camera className="h-3 w-3" />
          
        </Button>

        {hasCustomImage && (
          <Button
            onClick={onRemoveClick}
            aria-label="Remove profile photo"
            className="flex items-center gap-1.5 h-8 px-3 rounded-full text-xs font-semibold
              bg-red-500/10 hover:bg-red-500/20 active:bg-red-500/30
              text-red-500 border border-red-500/20
              shadow-sm transition-colors"
          >
            <Trash2 className="h-3 w-3" />
          </Button>
        )}
      </div>
    </div>
  );
}


export function UserProfile({
  displayName,
  email,
  username,
  avatarSrc,
  hasCustomImage,
  roleLabel,
  roleClass,
  dotClass,
  isUploading,
  isDeleting,
  showDeleteConfirm,
  onFileChange,
  onDeleteImage,
  onEditProfileClick,
  onShowDeleteConfirm,
  onHideDeleteConfirm,
}: UserProfileProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="min-h-screen flex items-start justify-center pt-16 sm:pt-24 px-4 pb-12 bg-background">
      {showDeleteConfirm && (
        <DeleteConfirmModal
          isDeleting={isDeleting}
          onConfirm={onDeleteImage}
          onCancel={onHideDeleteConfirm}
        />
      )}

      <Input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={onFileChange}
      />

      <div className="w-full max-w-sm space-y-3">
        <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
          <div className="h-20 bg-linear-to-br from-indigo-600/30 via-indigo-900/20 to-transparent dark:from-indigo-900/60 dark:via-indigo-950/40" />

          <div className="flex flex-col items-center -mt-12 pb-6 px-5">
            <AvatarSection
              avatarSrc={avatarSrc}
              displayName={displayName}
              hasCustomImage={hasCustomImage}
              isUploading={isUploading}
              onUploadClick={() => fileInputRef.current?.click()}
              onRemoveClick={onShowDeleteConfirm}
            />

            <div className="mt-3 text-center">
              <h1 className="text-lg font-bold text-foreground leading-tight">
                {displayName}
              </h1>
              <span
                className={`inline-flex items-center gap-1.5 mt-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${roleClass}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${dotClass}`} />
                {roleLabel}
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
          <div className="px-5 pt-4 pb-1">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Account Info
            </p>
          </div>
          <div className="divide-y divide-border">
            <InfoRow
              icon={<User className="h-3.5 w-3.5" />}
              label="Username"
              value={username || "—"}
            />
            <InfoRow
              icon={<Mail className="h-3.5 w-3.5" />}
              label="Email"
              value={email || "—"}
              mono
            />
            <InfoRow
              icon={<Shield className="h-3.5 w-3.5" />}
              label="Role"
              value={
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${roleClass}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${dotClass}`} />
                  {roleLabel}
                </span>
              }
            />
          </div>
        </div>

        <Button
          variant="outline"
          onClick={onEditProfileClick}
          className="w-full h-11 gap-2 rounded-xl font-semibold"
        >
          <Pencil className="h-4 w-4" />
          Edit Profile
        </Button>
      </div>
    </div>
  );
}
