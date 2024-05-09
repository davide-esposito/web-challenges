import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import LeftArrow from "public/icons/arrow-left.svg";
import RightArrow from "public/icons/arrow-right.svg";
import ChevronLeft from "public/icons/chevron-left.svg";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);
  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return <div>Volume not found!</div>;
  }

  return (
    <>
      <PageWrapper>
        <AllVolumesLink href="/volumes">
          <ChevronLeft />
          All Volumes
        </AllVolumesLink>
        <Header>{volume.title}</Header>
        <Description>{volume.description}</Description>
        <VolumeWrapper color={volume.color}>
          <ListItems>
            {volume.books.map(({ ordinal, title }) => (
              <li key={title}>
                {ordinal}: <br /> <strong>{title}</strong>
              </li>
            ))}
          </ListItems>
          <Image
            src={volume.cover}
            alt={`Cover of ${volume.title}`}
            width={140}
            height={230}
          />
        </VolumeWrapper>
        <LinkContainer>
          {previousVolume && (
            <NavigationLink href={`/volumes/${previousVolume.slug}`}>
              <LeftArrowIcon />
              <span>
                <ItalicText>Previous Volume:</ItalicText>
                {previousVolume.title}
              </span>
            </NavigationLink>
          )}
          {nextVolume && (
            <NavigationLink href={`/volumes/${nextVolume.slug}`}>
              <span>
                <ItalicText>Next Volume:</ItalicText>
                {nextVolume.title}
              </span>
              <RightArrowIcon />
            </NavigationLink>
          )}
        </LinkContainer>
      </PageWrapper>
    </>
  );
}

const PageWrapper = styled.div`
  padding: 20px;
`;

const AllVolumesLink = styled(Link)`
  color: var(--color-link);
  text-decoration: none;
  font-size: 16px;
  display: flex;
  align-items: center;
`;

const Header = styled.h1`
  font: var(--font-headline-1);
  text-align: center;
`;

const Description = styled.p`
  font: var(--font-caption);
  text-align: center;
`;

const VolumeWrapper = styled.div`
  display: flex;
  gap: 30px;
  padding: 30px 20px;
  color: var(--color-clouds);
  background-color: ${({ color }) => color};
  box-shadow: var(--box-shadow-book);
  &:hover {
    box-shadow: var(--box-shadow-book--hover);
  }
`;

const ListItems = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const NavigationLink = styled(Link)`
  text-decoration: none;
  color: var(--color-link);
  display: flex;
  align-items: center;
  & > span {
    display: flex;
    flex-direction: column;
  }
`;

const ItalicText = styled.span`
  font-style: italic;
`;

const LeftArrowIcon = styled(LeftArrow)`
  margin-right: 8px;
`;

const RightArrowIcon = styled(RightArrow)`
  margin-right: 8px;
`;
