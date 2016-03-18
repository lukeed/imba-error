export class Errorable < Error
	def initialize msg = ''
		super msg

		self:message = msg
		self:name = self:constructor:name

		if Error:captureStackTrace isa Function
			Error.captureStackTrace(self, self:constructor)
		else
			self:stack = (Error.new msg):stack
