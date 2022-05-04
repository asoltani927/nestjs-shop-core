import { extname } from 'path';
import { HttpException, HttpStatus } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

export const editFileName = (
  req: any,
  file: any,
  callback: (...args: any[]) => void,
) => {
  const fileExtName = extname(file.originalname);
  const fileName = uuid();
  // const date = getUrlFriendlyDate(new Date());

  callback(null, `${fileName}${fileExtName}`);
};

export const getUrlFriendlyDate = (date: Date): string => {
  return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${(
    '0' + date.getDate()
  ).slice(-2)}`;
};

export const imageFileFilter = async (
  req: any,
  file: any,
  callback: (...args: any[]) => void,
) => {
  if (!file.originalname.toLocaleLowerCase().match(/\.(jpg|jpeg|png|gif)$/)) {
    return callback(
      new HttpException(
        'Only image files are allowed!',
        HttpStatus.NOT_ACCEPTABLE,
      ),
      false,
    );
  }
  callback(null, true);
};
