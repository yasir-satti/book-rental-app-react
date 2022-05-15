from configparser import ConfigParser
from selenium.webdriver import ActionChains
from selenium.webdriver.support.select import Select
from selenium.webdriver.common.keys import Keys
import time
import logging
from utils.LogUtil import Logger

log = Logger(__name__, logging.INFO)


class BasePage:
    global config
    config = ConfigParser()
    config.read('behave.ini')

    def __init__(self, driver):
        self.driver = driver

    def open(self, url):
        self.driver.get(url)
        log.logger.info("Opened url " + str(url))
        time.sleep(3)


    def click(self, locator):
        if str(locator).endswith("_XPATH"):
            self.driver.find_element_by_xpath(config.get("locators", locator)).click()
        elif str(locator).endswith("_CSS"):
            self.driver.find_element_by_css_selector(config.get("locators", locator)).click()
        elif str(locator).endswith("_ID"):
            self.driver.find_element_by_id(config.get("locators", locator)).click()
        log.logger.info("Clicking on an element: " + str(locator))


    def getInlineErrorMessage(self, locator):
        if str(locator).endswith("_XPATH"):
            self.driver.find_element_by_xpath(config.get("locators", locator))
        elif str(locator).endswith("_CSS"):
            self.driver.find_element_by_css_selector(config.get("locators", locator))
        elif str(locator).endswith("_ID"):
            self.driver.find_element_by_id(config.get("locators", locator))
        log.logger.info("Getting Error Message: " + str(locator))


    def emptyField(self, locator):
        if str(locator).endswith("_XPATH"):
            self.driver.find_element_by_xpath(config.get("locators", locator)).send_keys(
                Keys.CONTROL + "a")
            self.driver.find_element_by_xpath(config.get("locators", locator)).send_keys(Keys.DELETE)
        elif str(locator).endswith("_CSS"):
            self.driver.find_element_by_css(config.get("locators", locator)).send_keys(Keys.CONTROL + "a")
            self.driver.find_element_by_css(config.get("locators", locator)).send_keys(Keys.DELETE)
        elif str(locator).endswith("_ID"):
            self.driver.find_element_by_id(config.getig("locators", locator)).send_keys(Keys.CONTROL + "a")
            self.driver.find_element_by_id(config.get("locators", locator)).send_keys(Keys.DELETE)
        log.logger.info("Getting Error Message: " + str(locator))


    def forceClick(self, locator):
        if str(locator).endswith("_XPATH"):
            actions = ActionChains(self.driver)
            el = self.driver.find_elements_by_xpath("//div[@title='6 months')]")
            element = self.driver.find_element_by_xpath(config.get("locators", locator))
            actions.click(el).perform()
        elif str(locator).endswith("_CSS"):
            element = self.driver.find_element_by_css_selector(config.get("locators", locator))
            # actions.click(element).perform()
        elif str(locator).endswith("_ID"):
            element = self.driver.find_element_by_id(config.get("locators", locator))
            # actions.click(element).perform()


    def type(self, locator, value):
        if str(locator).endswith("_XPATH"):
            self.driver.find_element_by_xpath(config.get("locators", locator)).send_keys(value)
        elif str(locator).endswith("_CSS"):
            self.driver.find_element_by_css_selector(config.get("locators", locator)).send_keys(value)
        elif str(locator).endswith("_ID"):
            self.driver.find_element_by_id(config.get("locators", locator)).send_keys(value)

        log.logger.info("Typing in an element: " + str(locator) + " value entered as : " + str(value))


    def select(self, locator, value):
        global dropdown
        if str(locator).endswith("_XPATH"):
            dropdown = self.driver.find_element_by_xpath(config.get("locators", locator))
        elif str(locator).endswith("_CSS"):
            dropdown = self.driver.find_element_by_css_selector(config.get("locators", locator))
        elif str(locator).endswith("_ID"):
            dropdown = self.driver.find_element_by_id(config.get("locators", locator))

        select = Select(dropdown)
        select.select_by_visible_text(value)

        log.logger.info("Selecting from an element: " + str(locator) + " value selected as : " + str(value))


    def moveTo(self, locator):
        # added comments
        if str(locator).endswith("_XPATH"):
            element = self.driver.find_element_by_xpath(config.get("locators", locator))
        elif str(locator).endswith("_CSS"):
            element = self.driver.find_element_by_css_selector(config.get("locators", locator))
        elif str(locator).endswith("_ID"):
            element = self.driver.find_element_by_id(config.get("locators", locator))

        action = ActionChains(self.driver)
        action.move_to_element(element).perform()

        log.logger.info("Moving to an element: " + str(locator))


    def isDisplayed(self, locator):
        if str(locator).endswith("_XPATH"):
            element = self.driver.find_element_by_xpath(config.get("locators", locator)).is_displayed()
            print("ends in xpath")
        elif str(locator).endswith("_CSS"):
            element = self.driver.find_element_by_css_selector(
                config.get("locators", locator)).is_displayed()
            print("ends in css")
        elif str(locator).endswith("_ID"):
            element = self.driver.find_element_by_id(config.get("locators", locator)).is_displayed()
            print("ends in id")
        log.logger.info("Display of an element: " + str(locator))


    def confirmRedirection(self, expected_url):
        current_url = self.driver.current_url
        assert expected_url in current_url, \
            f"Expected {expected_url} in {current_url}."


    def clickThisButton(self, button):
        self.driver.find_element_by_xpath("//button//span[contains(text(), '{}')]".format(button)).click()
        print(f"Clicked on '{button}'")