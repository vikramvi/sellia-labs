import React from 'react';
import Icon from 'react-icons-kit';
import { iosCamera } from 'react-icons-kit/ionicons/iosCamera';
import Dropzone from 'react-dropzone';
import Box from 'reusecore/src/elements/Box';
import Image from 'reusecore/src/elements/Image';
import { UploadIconWrapper } from './style';
import Avatar from 'core/static/images/user-placeholder.svg';

const PickImages = ({ onPreviewDrop, proPic, maxSize, onDropRejected }) => (
  <Box flexBox justifyContent="center" pt={40} pb={66}>
    <Dropzone
      onDrop={onPreviewDrop}
      maxSize={maxSize}
      onDropRejected={onDropRejected}
      multiple={false}
    >
      {({ getRootProps, getInputProps }) => {
        return (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <div
              style={{
                border: 'none',
                width: '112px',
                height: '112px',
                cursor: 'pointer',
                position: 'relative',
                outline: 'none',
              }}
            >
              {proPic != null ? (
                <>
                  <Image
                    key={proPic.preview}
                    src={proPic.preview}
                    alt={proPic.preview}
                    width="112px"
                    height="112px"
                    style={{
                      borderRadius: '100%',
                    }}
                  />

                  <UploadIconWrapper>
                    <Icon icon={iosCamera} size={30} />
                  </UploadIconWrapper>
                </>
              ) : (
                <>
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      overflow: 'hidden',
                      backgroundColor: '#f7f7f7',
                      borderRadius: '100%',
                    }}
                  >
                    <Image
                      src={Avatar}
                      alt="PlaceHolder Image"
                      width="112px"
                      height="112px"
                      style={{
                        borderRadius: '100%',
                      }}
                    />
                  </div>
                  <UploadIconWrapper>
                    <Icon icon={iosCamera} size={30} />
                  </UploadIconWrapper>
                </>
              )}
            </div>
          </div>
        );
      }}
    </Dropzone>
  </Box>
);

// export default Favorites;
export default PickImages;
