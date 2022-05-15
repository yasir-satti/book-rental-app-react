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