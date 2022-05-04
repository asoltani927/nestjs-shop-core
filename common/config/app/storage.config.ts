import { diskStorage } from 'multer';
import { join } from 'path';
import { editFileName, getUrlFriendlyDate } from '../../utils/storage.utils';
import { StorageAttachmentUsage } from '../../enums/storage';

export const StorageDestPath = () => {
  const dest = process.env.APP_STORAGE_DEST ?? '../cdn/public';
  return join(process.cwd(), dest);
};

export const StorageConfig = (
  collectionType: StorageAttachmentUsage,
  destPath = undefined,
) => {
  const finalDetPath = destPath ?? StorageDestPath();
  console.log(finalDetPath);
  return diskStorage({
    destination: join(
      finalDetPath,
      collectionType.toLowerCase(),
      getUrlFriendlyDate(new Date()),
    ),
    filename: editFileName,
  });
};

export const StorageLimitConfig = () => {
  return {
    fields: 10,
    fieldSize: 1024, // 1KB
    fileSize: 6 * 1024 * 1024, // 6MB
    files: 1,
  };
};
