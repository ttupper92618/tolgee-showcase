// chakra imports
import { Box, Flex, Stack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useTranslate } from "@tolgee/react";
import { LangSelector } from 'components/languageSelector/languageSelector';

//   Custom components
import Links from 'components/sidebar/components/Links';

const SidebarTitleWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	margin: 16px 16px 16px 30px;
`;

const SideBarBoldTitle = styled.div`
	font-weight: 900;
	font-size: 25px;
`;

const SideBarNormalTitle = styled.div`
	font-weight: 300;
	font-size: 25px;
	padding-left: 7px;
	opacity: 0.70;
`;

const LanguageSwitcherWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	margin: 16px 16px 16px 30px;
`;

// FUNCTIONS
function SidebarContent(props: { routes: RoutesType[] }) {
	const { routes } = props;
	const { t } = useTranslate();
	// SIDEBAR
	return (
		<Flex direction='column' height='100%' pt='25px' borderRadius='30px'>
			<SidebarTitleWrapper>
				<SideBarBoldTitle>Tolgee</SideBarBoldTitle>
				<SideBarNormalTitle>{t('title')}</SideBarNormalTitle>
			</SidebarTitleWrapper>
			<Stack direction='column' mt='8px' mb='auto'>
				<Box ps='20px' pe={{ lg: '16px', '2xl': '16px' }}>
					<Links routes={routes} />
				</Box>
			</Stack>

			<Box>
				<LanguageSwitcherWrapper>
					<LangSelector />
				</LanguageSwitcherWrapper>
			</Box>
		</Flex>
	);
}

export default SidebarContent;
