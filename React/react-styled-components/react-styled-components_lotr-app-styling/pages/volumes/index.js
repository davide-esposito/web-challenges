import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { introduction, volumes } from "../../lib/data";

export default function Volumes() {
  return (
    <>
      <Header>The Lord of the Rings</Header>
      <Introduction>{introduction}</Introduction>
      <SecondHeader>All Volumes</SecondHeader>
      <VolumesList>
        {volumes.map((volume) => (
          <VolumeListItem key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`} passHref>
              <StyledLinkWrapper>
                <ImageWrapper>
                  <Image
                    src={volume.cover}
                    alt={`Cover of ${volume.title}`}
                    width={100}
                    height={160}
                  />
                </ImageWrapper>
                <VolumeTitle>{volume.title}</VolumeTitle>
              </StyledLinkWrapper>
            </Link>
          </VolumeListItem>
        ))}
      </VolumesList>
    </>
  );
}

const Header = styled.h1`
  font: var(--font-headline-1);
  padding: 0 20px 20px;
  text-align: center;
`;

const Introduction = styled.p`
  font: var(--font-caption);
  padding: 0 20px 20px;
  text-align: center;
`;

const SecondHeader = styled.h2`
  font: var(--font-headline-2);
  padding: 0 20px;
`;

const VolumesList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 20px;
`;

const VolumeListItem = styled.li``;

const StyledLinkWrapper = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ImageWrapper = styled.div`
  box-shadow: var(--box-shadow-book);
  width: 100px;
  height: 160px;
  &:hover {
    box-shadow: var(--box-shadow-book--hover);
  }
`;

const VolumeTitle = styled.span`
  color: var(--color-earth);
  padding-top: 8px;
`;
