import type { VsfIconProps } from '@storefront-ui/react';
import { VsfIconBase, VsfIconSize } from '@storefront-ui/react';

export default function VsfIconLogout({ size = VsfIconSize.base, viewBox = '0 0 24 24', ...attributes }: VsfIconProps) {
  return (
    <VsfIconBase {...attributes} size={size} viewBox={viewBox} data-testid="logout">
      <path d="M15.325 16.275a1.112 1.112 0 0 1-.275-.738c0-.275.092-.504.275-.687l1.85-1.85H10a.965.965 0 0 1-.712-.288A.965.965 0 0 1 9 12c0-.283.096-.521.288-.713A.967.967 0 0 1 10 11h7.175l-1.85-1.85c-.2-.2-.3-.437-.3-.712 0-.275.1-.513.3-.713.183-.2.413-.3.688-.3.275 0 .504.092.687.275l3.6 3.6c.1.1.171.208.213.325.041.117.062.242.062.375s-.02.258-.062.375a.883.883 0 0 1-.213.325l-3.6 3.6c-.217.217-.454.312-.712.287a1.052 1.052 0 0 1-.663-.312ZM5 21a1.93 1.93 0 0 1-1.413-.587A1.928 1.928 0 0 1 3 19V5c0-.55.196-1.021.587-1.413A1.928 1.928 0 0 1 5 3h6a.97.97 0 0 1 .713.287A.97.97 0 0 1 12 4a.97.97 0 0 1-.287.712A.968.968 0 0 1 11 5H5v14h6c.283 0 .521.096.713.288A.967.967 0 0 1 12 20a.97.97 0 0 1-.287.712A.968.968 0 0 1 11 21H5Z" />
    </VsfIconBase>
  );
}
