type InputType = string | null;

export const maskCpf = (string: InputType) => {
  if (!string) {
    return '';
  }
  return string
    .replace(/[^\d]/g, '')
    .replace(
      /([\d]{1,3})([\d]{1,3})?([\d]{1,3})?([\d]{1,2})?/,
      (match, p1, p2, p3, p4) => {
        return `${p1}.${p2}.${p3}-${p4}`.replace(/.undefined/g, '');
      },
    );
};

export const maskRg = (string: InputType) => {
  if (!string) {
    return '';
  }
  return string
    .replace(/[^\d]/g, '')
    .replace(
      /([\d]{1,2})([\d]{1,3})?([\d]{1,3})?([\d]{1})?/,
      (match, p1, p2, p3, p4) => {
        return `${p1}.${p2}.${p3}-${p4}`.replace(/.undefined/g, '');
      },
    );
};

export const maskCellPhone = (string: InputType) => {
  if (!string) {
    return '';
  }

  return string
    .replace(/[^\d]/g, '')
    .replace(
      /([\d]{1,2})([\d]{1,2})?([\d]{1,5})?([\d]{1,4})?/,
      (match, p1, p2, p3, p4) => {
        return `${p1}(${p2})${p3}-${p4}`.replace(/(\(|\)|\-)undefined/g, '');
      },
    );
};
